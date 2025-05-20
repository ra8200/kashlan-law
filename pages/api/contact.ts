import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, practiceArea, description } = req.body;

    // Validate required fields
    if (!description || description.trim().length === 0) {
      return res.status(400).json({ message: "Description is required." });
    }
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ message: "Name is required." });
    }
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "A valid email is required." });
    }
    if (!phone || phone.trim().length < 10) {
      return res
        .status(400)
        .json({ message: "A valid phone number is required." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try {
      // Send the email to the firm
      await transporter.sendMail({
        from: email,
        to: "intake@kashlanlaw.com",
        subject: `${practiceArea} , ${name} has submitted an inquiry.`,
        html: `
            <strong>${practiceArea}</strong>
            <p>
              Name: ${name}
              </br>
              Email: ${email}
              </br>
              Phone: ${phone}
            </p>
            <p>${description}</p>
          `,
        replyTo: email,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: process.env.EMAIL_ACCOUNT,
        to: email,
        subject: "We have received your inquiry",
        html: `
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to us regarding your ${practiceArea} matter. We have received your inquiry and will review it shortly. Our team will get back to you as soon as possible.</p>
            <p>Best regards,</p>
            <p>Kashlan Law Firm</p>
          `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({
        message: "Failed to send email",
        error: error.message || "Unknown error",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
