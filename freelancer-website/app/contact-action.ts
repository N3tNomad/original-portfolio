"use server"

import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Store in database
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, service, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${service || null}, ${message})
    `

    // Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      try {
        // Dynamically import Resend only when API key is available
        const { Resend } = await import("resend")
        const resend = new Resend(resendApiKey)

        // Send notification email to Eric
        await resend.emails.send({
          from: "Eric Mbugua Website <onboarding@resend.dev>",
          to: ["ericmbuguawaweru@gmail.com"],
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1f2937;">Contact Details:</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Service Needed:</strong> ${service || "Not specified"}</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
                <p style="line-height: 1.6; color: #374151;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
                <p style="margin: 0; color: #065f46; font-size: 14px;">
                  💡 <strong>Quick Action:</strong> Reply directly to this email to respond to ${firstName}.
                </p>
              </div>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              
              <p style="color: #6b7280; font-size: 12px; text-align: center;">
                This email was sent from your website contact form.<br>
                Submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        })

        // Send confirmation email to client
        await resend.emails.send({
          from: "Eric Mbugua <onboarding@resend.dev>",
          to: [email],
          subject: "Thank you for contacting Eric Mbugua - Message Received!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); color: white; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 28px;">Thank You, ${firstName}!</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Your message has been received</p>
              </div>
              
              <div style="padding: 30px; background-color: #fff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                <p style="font-size: 16px; color: #1f2937; line-height: 1.6;">
                  Hi ${firstName},
                </p>
                
                <p style="color: #374151; line-height: 1.6;">
                  Thank you for reaching out! I've received your message and will get back to you within 24 hours. 
                  I'm excited to learn more about your project and how I can help bring your vision to life.
                </p>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="margin-top: 0; color: #1f2937; font-size: 16px;">Your Message Summary:</h3>
                  <p style="margin: 5px 0;"><strong>Service:</strong> ${service || "Not specified"}</p>
                  <p style="margin: 5px 0;"><strong>Message:</strong></p>
                  <p style="color: #6b7280; font-style: italic; margin: 10px 0;">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: white; margin-top: 0; font-size: 16px;">What happens next?</h3>
                  <ul style="color: white; opacity: 0.95; line-height: 1.6; margin: 0; padding-left: 20px;">
                    <li>I'll review your project requirements</li>
                    <li>Prepare a personalized response with next steps</li>
                    <li>Send you a detailed proposal if needed</li>
                    <li>Schedule a call to discuss your project in detail</li>
                  </ul>
                </div>
                
                <p style="color: #374151; line-height: 1.6;">
                  In the meantime, feel free to check out my recent work and client testimonials on my website. 
                  If you have any urgent questions, don't hesitate to reply to this email.
                </p>
                
                <p style="color: #374151; line-height: 1.6;">
                  Best regards,<br>
                  <strong>Eric Mbugua Waweru</strong><br>
                  <span style="color: #7c3aed;">Creative Freelancer</span>
                </p>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; font-size: 14px; margin: 0;">
                    📧 <a href="mailto:erictechske@gmail.com" style="color: #7c3aed;">erictechske@gmail.com</a> | 
                    📍 Nairobi, Kenya
                  </p>
                </div>
              </div>
              
              <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 20px;">
                This is an automated confirmation email. Please do not reply to this message.
              </p>
            </div>
          `,
        })

        console.log("Emails sent successfully")
      } catch (emailError) {
        console.error("Error sending emails:", emailError)
        // Don't fail the entire submission if email fails
      }
    } else {
      console.log("Resend API key not found - emails not sent")
    }

    return {
      success: true,
      message: `Thank you ${firstName}! Your message has been received and stored. ${
        resendApiKey
          ? "I'll get back to you within 24 hours. Please check your email for a confirmation."
          : "I'll get back to you within 24 hours."
      }`,
    }
  } catch (error) {
    console.error("Error processing contact form:", error)

    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact me directly at erictechske@gmail.com.",
    }
  }
}
