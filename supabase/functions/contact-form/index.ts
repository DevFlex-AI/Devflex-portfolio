import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { name, email, message }: ContactFormData = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseServiceKey,
        "Authorization": `Bearer ${supabaseServiceKey}`,
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        status: "pending",
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Failed to save submission:", errorData);
      throw new Error("Failed to save submission");
    }

    const submission = await response.json();
    const submissionId = submission[0]?.id;

    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY");

      if (resendApiKey) {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "DevFlex Portfolio <onboarding@resend.dev>",
            to: ["mahirusus@gmail.com"],
            subject: `Portfolio Contact: ${name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #00FFFF; border-bottom: 2px solid #00FFFF; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Message:</strong></p>
                  <p style="background: white; padding: 15px; border-left: 4px solid #00FFFF; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="color: #666; font-size: 12px;">
                  Received: ${new Date().toLocaleString()}
                </p>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          await fetch(`${supabaseUrl}/rest/v1/contact_submissions?id=eq.${submissionId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "apikey": supabaseServiceKey,
              "Authorization": `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({
              status: "sent",
              sent_at: new Date().toISOString(),
            }),
          });
        } else {
          const emailError = await emailResponse.text();
          console.error("Failed to send email:", emailError);

          await fetch(`${supabaseUrl}/rest/v1/contact_submissions?id=eq.${submissionId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "apikey": supabaseServiceKey,
              "Authorization": `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({
              status: "failed",
              error_message: emailError,
            }),
          });
        }
      } else {
        console.warn("RESEND_API_KEY not configured - email not sent");
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process your message. Please try again.",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
