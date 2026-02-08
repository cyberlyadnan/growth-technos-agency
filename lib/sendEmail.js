import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMTP_USER || "teamtrial071@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || process.env.NEXT_PUBLIC_SMTP_PASS || "";
const RECEIVER = process.env.RECEIVER_EMAIL || process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMTP_USER || SMTP_USER;

export async function sendEmail({ name, email, company, phone, service, budget, message }) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,
      to: RECEIVER,
      subject: "New Contact Form Submission - Growth Technos",
      html: `
        <h2>New Contact Query</h2>
        <p><strong>Name:</strong> ${String(name || "").trim() || "N/A"}</p>
        <p><strong>Email:</strong> ${String(email || "").trim() || "N/A"}</p>
        <p><strong>Company:</strong> ${String(company || "").trim() || "N/A"}</p>
        <p><strong>Phone:</strong> ${String(phone || "").trim() || "N/A"}</p>
        <p><strong>Service:</strong> ${String(service || "").trim() || "N/A"}</p>
        <p><strong>Budget:</strong> ${String(budget || "").trim() || "N/A"}</p>
        <p><strong>Message:</strong> ${String(message || "").trim() || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error?.message || "Failed to send email" };
  }
}
