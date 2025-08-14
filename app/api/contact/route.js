import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const { name, email, company, phone, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    const emailResult = await sendEmail({ name, email, company, phone, service, budget, message });

    if (emailResult.success) {
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          message: "Failed to send email",
          error: emailResult.error
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500 }
    );
  }
}
