const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function async(req, res) {
  const { email, message } = req.body;

  const content = {
    to: '6matbub@gmail.com',
    from: '6matbub@gmail.com',
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  // res.send(JSON.stringify(content))
  sgMail.send(content).then(
    () => {},
    (error) => {
      // console.error(error);

      if (error.response) {
        // console.error(error.response.body)
        res.status(400).send(error.response.body);
      }
    }
  );

  return res.status(200).send('Message sent');
}
