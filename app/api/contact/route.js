import { sendEmail } from "@/lib/sendEmail";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ message: "Invalid JSON body" }, 400);
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";

    if (!name || !email || !message) {
      return json({ message: "Name, email, and message are required" }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ message: "Please enter a valid email address" }, 400);
    }

    const emailResult = await sendEmail({ name, email, company, phone, service, budget, message });

    if (emailResult.success) {
      return json({ message: "Email sent successfully" }, 200);
    }
    return json({
      message: "Failed to send email. Please try again or contact us directly.",
      error: emailResult.error,
    }, 500);
  } catch (error) {
    console.error("Contact API Error:", error);
    return json(
      { message: "Something went wrong. Please try again later.", error: error?.message },
      500
    );
  }
}
