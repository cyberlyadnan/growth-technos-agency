import nodemailer from "nodemailer";

export async function sendEmail({ name, email, company, phone, service, budget, message }) {
  try {
    const transporter = nodemailer.createTransport({
    //   host: process.env.NEXT_PUBLIC_SMTP_HOST, // e.g. "smtp.gmail.com"
      host:"smtp.gmail.com",
      port: process.env.NEXT_PUBLIC_SMTP_PORT || 587,
      secure: false, // true for 465, false for 587
      auth: {
        // user: process.env.NEXT_PUBLIC_SMTP_USER, // your SMTP email
        // pass: process.env.NEXT_PUBLIC_SMTP_PASS, // your SMTP password
        user:'teamtrial071@gmail.com',
        pass:'octagaming'
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your email where queries come
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Query</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: error.message };
  }
}
