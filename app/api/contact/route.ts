import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

const rateLimitStore = new Map<
  string,
  { count: number; lastRequest: number }
>();
const MAX_REQUESTS = 3; // Maximum number of requests
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

const rateLimiter = (ip: string): boolean => {
  const currentTime = Date.now();
  const rateLimitData = rateLimitStore.get(ip);

  // If no data for the IP, create a new entry
  if (!rateLimitData) {
    rateLimitStore.set(ip, { count: 1, lastRequest: currentTime });
    return true;
  }

  const { count, lastRequest } = rateLimitData;

  // Check if the time window has passed
  if (currentTime - lastRequest > TIME_WINDOW) {
    rateLimitStore.set(ip, { count: 1, lastRequest: currentTime });
    return true;
  }

  // Check if the request count exceeds the limit
  if (count >= MAX_REQUESTS) {
    return false;
  }

  // Increment the request count
  rateLimitStore.set(ip, { count: count + 1, lastRequest });
  return true;
};

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    redirect("/contact?success=false&message=Please fill out all fields.");
  }

  // Get client IP address (simplified, may vary based on deployment)
  const ip = req.headers.get("x-forwarded-for");

  // Apply rate limiter
  if (ip && !rateLimiter(ip)) {
    redirect(
      "/contact?success=false&message=Too many requests. Please try again later."
    );
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
    subject: `New message from ${name}`,
    text: message,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Message from ${name}</h2>
        <h4>Contact Details</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h4>Message</h4>
        <p style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 0.9em;">This message was sent from the contact form on your website.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    redirect("/contact?success=false&message=Failed to send message.");
  }

  redirect("/contact?success=true&message=Message sent successfully!");
}
