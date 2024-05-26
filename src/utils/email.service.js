import formData from "form-data";
import Mailgun from 'mailgun.js';
import prisma from "../prisma.js"

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

export const sendInterestEmail = async (ownerEmail, userEmail, property) => {

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      phone: true
    }
  });

  const owner = await prisma.user.findUnique({
    where: { email: ownerEmail },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      phone: true
    }
  });

  mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: process.env.MAILGUN_FROM_EMAIL,
    to: ownerEmail,
    subject: 'New Interest in Your Property',
    text: `A user has expressed interest in your property. User email: ${userEmail}. Property details: ${JSON.stringify(property)}`
  }).then(msg => console.log(msg)).catch(err => console.error(err));

  mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: process.env.MAILGUN_FROM_EMAIL,
    to: userEmail,
    subject: 'Interest Expressed',
    text: `You have expressed interest in a property. Property details: ${JSON.stringify(property)}`,
    html: `<p>You have expressed interest in a property. Owner details:</p> ${JSON.stringify(owner)}`
  }).then(msg => console.log(msg)).catch(err => console.error(err));
}
