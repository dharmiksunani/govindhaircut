import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for booking
  app.post("/api/book", async (req, res) => {
    const { name, email, phone, location, service, date, time, message } = req.body;

    // Simple backend validation
    if (!name || !email || !phone) {
       return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Note: In production, the user needs to provide REAL credentials in .env
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || 'niyaljohn@gmail.com',
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'niyaljohn@gmail.com',
        subject: `💇‍♂️ New Booking Request: ${service} - ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
            <div style="background: #111; color: gold; padding: 20px; text-align: center;">
              <h1>Govind Portfolio</h1>
              <p>New Appointment Request</p>
            </div>
            <div style="padding: 20px; color: #333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Preferred Date:</strong> ${date}</p>
              <p><strong>Preferred Time:</strong> ${time}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f9f9f9; padding: 10px; border-left: 4px solid gold;">${message || 'No message provided'}</p>
            </div>
            <div style="background: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #666;">
              Sent from Govind Portfolio Booking System
            </div>
          </div>
        `,
      };

      // Check if credentials exist, otherwise just log
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
      } else {
        console.log("No email credentials found. Booking details:", req.body);
      }
      
      res.json({ success: true, message: "Booking request sent successfully!" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send booking request" });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
