const { Resend } = require("resend");

// ❌ Old code
// const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Use dummy key for demo / resume
const resend = new Resend("re_test_dummykey123"); // dummy key

async function testEmail() {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",  // allowed in test mode
      to: "gvaishnavi069@gmail.com",  // recipient
      subject: "Test Email",
      html: "<p>This is a test email (demo mode)</p>",
    });

    console.log("Test email sent (demo mode)");
  } catch (error) {
    console.error("Test email failed (demo mode)", error);
  }
}

testEmail();
