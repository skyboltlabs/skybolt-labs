export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const contentType = request.headers.get("content-type") || "";

    let formName = "contact";
    let data = {};

    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      formName = formData.get("form-name") || "contact";
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
    } else if (contentType.includes("application/json")) {
      data = await request.json();
      formName = data["form-name"] || "contact";
    }

    console.log(`Received form submission for: ${formName}`, data);

    const supabaseUrl = env.VITE_SUPABASE_URL;
    const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      let endpoint = "";
      let payload = {};

      if (formName === "get-started") {
        endpoint = `${supabaseUrl}/functions/v1/send-quote-email`;
        payload = {
          name: `${data.firstName || ""} ${data.lastName || ""}`.trim() || "Web Visitor",
          email: data.email || "",
          company: data.company || "",
          projectType: data.service || data.projectType || "Not specified",
          budget: data.budget || "Not specified",
          timeline: data.timeline || "",
          description: data.description || data.message || "No description provided",
        };
      } else {
        // Default to contact
        endpoint = `${supabaseUrl}/functions/v1/send-contact-email`;
        payload = {
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || data.whatsapp || "",
          company: data.company || "",
          projectType: data.projectType || "Not specified",
          budget: data.budget || "Not specified",
          timeline: data.timeline || "",
          message: data.message || "",
        };
      }

      console.log(`Forwarding submission to Supabase Edge Function: ${endpoint}`, payload);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Supabase Edge Function failed with status ${res.status}:`, errorText);
      } else {
        console.log("Successfully forwarded submission to Supabase.");
      }
    } else {
      console.warn("Supabase configuration not found in environment variables. Running in mock submission mode.");
    }

    // Return success response to the client
    return new Response(
      JSON.stringify({ success: true, message: "Submission received successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    console.error("Error processing form submission:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: err.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
