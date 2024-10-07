/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'advika1234567789@gmail.com', // Your email
    pass: 'aditi@2004', // Use an app password if 2FA is enabled
  },
});

// Cloud Function to send email
exports.sendEmail = functions.https.onRequest((req, res) => {
  const {name, email, message} = req.body;

  const mailOptions = {
    from: email,
    to: 'advika1234567789@gmail.com',
    subject: `Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Email sent successfully');
  });
});
