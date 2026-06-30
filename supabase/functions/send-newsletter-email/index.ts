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
    const { email } = await req.json()

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
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
          <h1 style="color: white; margin: 0;">New Newsletter Subscription</h1>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Subscription Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #475569;">Email Address:</td>
                <td style="padding: 10px; color: #1e293b;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #475569;">Source:</td>
                <td style="padding: 10px; color: #1e293b;">Blog Newsletter Subscription</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #475569;">Subscription Date:</td>
                <td style="padding: 10px; color: #1e293b;">${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST</td>
              </tr>
            </table>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #f59e0b;">
            <p style="color: #92400e; margin: 0; font-weight: bold;">Action Required:</p>
            <p style="color: #92400e; margin: 5px 0 0 0;">Please add this email address to your newsletter mailing list.</p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            Subscription from Skybolt Labs Blog
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
        from: 'Skybolt Labs Newsletter <noreply@skyboltlabs.co.za>',
        to: ['skyboltlabs@outlook.com'],
        subject: `New Newsletter Subscription: ${email}`,
        html: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Resend API error:', errorData)
      throw new Error(`Failed to send email: ${emailResponse.status}`)
    }

    const emailResult = await emailResponse.json()
    console.log('Newsletter subscription email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Newsletter subscription successful',
        emailId: emailResult.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-newsletter-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process newsletter subscription', 
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})