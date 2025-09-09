const { Resend } = require("resend");

// ❌ old code: process.env.RESEND_API_KEY
// const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ dummy key for demo / resume
const resend = new Resend("re_test_dummykey123");

async function sendOtpEmail(toEmail, otp) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",  // allowed in test mode
      to: toEmail,                    // recipient
      subject: "Your OTP Code",
      html: `<p>Your OTP is: ${otp}</p>`,
    });
    console.log("OTP email sent (demo mode)");
  } catch (error) {
    console.error("Failed to send OTP (demo mode)", error);
  }
}

module.exports = sendOtpEmail;
