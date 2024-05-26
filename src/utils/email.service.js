import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
    port: 587,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendInterestEmail = async (ownerEmail, userEmail, property) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: "ravinspamjunk@gmail.com",
    subject: 'New Interest in Your Property',
    text: `A user has expressed interest in your property. User email: ${userEmail}. Property details: ${JSON.stringify(property)}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};