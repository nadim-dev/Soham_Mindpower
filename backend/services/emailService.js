const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ subject, html }) => {
  return resend.emails.send({
    from: "soham_mindpower <patient@focskill.in>",
    to: process.env.DOCTOR_EMAIL, // ✅ hardcoded doctor email
    subject,
    html,
  });
};

module.exports = { sendEmail };
