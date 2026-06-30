import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { 
      name, 
      email, 
      company, 
      projectType, 
      budget, 
      timeline, 
      description 
    } = await req.json()

    // Validate required fields
    if (!name || !email || !projectType || !budget || !description) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Quote Request</h1>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Client Information</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${company || 'Not provided'}</td>
            </tr>
          </table>

          <h2 style="color: #1e293b; margin-bottom: 20px;">Project Requirements</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Project Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Budget Range:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Timeline:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${timeline || 'Not specified'}</td>
            </tr>
          </table>

          <h2 style="color: #1e293b; margin-bottom: 15px;">Project Description</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
            <p style="color: #1e293b; line-height: 1.6; margin: 0;">${description.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #3b82f6;">
            <p style="color: #1e40af; margin: 0; font-weight: bold;">Next Steps:</p>
            <p style="color: #1e40af; margin: 5px 0 0 0;">Please respond to this quote request within 24 hours with a detailed proposal.</p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Quote requested on ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST
          </p>
          <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">
            From: Skybolt Labs Quote System
          </p>
        </div>
      </div>
    `

    // Send email using Resend API
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured')
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Skybolt Labs Quotes <noreply@skyboltlabs.coza>',
        to: ['skyboltlabs@outlook.com'],
        subject: `New Quote Request from ${name}`,
        html: emailContent,
        reply_to: email,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      throw new Error(`Failed to send email: ${emailResponse.status}`)
    }

    const emailResult = await emailResponse.json()
    console.log('Quote email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request submitted successfully',
        emailId: emailResult.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-quote-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send quote request', 
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})