// mailer.js
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO, // recipient
    subject: subject,
    html: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📩 Email sent successfully!");
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
  }
};

module.exports = sendEmail;
