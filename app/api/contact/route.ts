import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    redirect("/contact?success=false&message=Please fill out all fields.");
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Yeni mesaj - ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    redirect("/contact?success=false&message=Failed to send message.");
  }

  redirect("/contact?success=true&message=Message sent successfully!");
}
