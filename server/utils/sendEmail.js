const { Resend } = require("resend");

// ❌ old code: process.env.RESEND_API_KEY
// const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ dummy key for demo / resume
const resend = new Resend("re_test_dummykey123");

async function sendEmail(toEmail, subject, htmlContent) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",  // allowed in test mode
      to: toEmail,                     // recipient
      subject: subject,
      html: htmlContent,
    });
    console.log("Email sent (demo mode)");
  } catch (error) {
    console.error("Failed to send email (demo mode)", error);
  }
}

module.exports = sendEmail;
