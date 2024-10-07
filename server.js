import express from "express"; // Use import if your package.json has "type": "module"
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use a mail service
  auth: {
    user: "your-email@gmail.com", // Your email
    pass: "your-email-password", // Your email password (or app-specific password)
  },
});

// Endpoint to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email,
    to: "your-email@gmail.com", // Your email address to receive the form
    subject: `Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
