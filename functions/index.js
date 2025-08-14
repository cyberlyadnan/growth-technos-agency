const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Load secrets from Firebase environment config
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const receiverEmail = functions.config().gmail.receiver;

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    const mailOptions = {
      from: `"Website Contact" <${gmailEmail}>`,
      to: receiverEmail,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Query</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Service:</strong> ${data.service || "N/A"}</p>
        <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("📩 Email sent successfully");
    } catch (error) {
      console.error("❌ Error sending email:", error);
    }
  });
