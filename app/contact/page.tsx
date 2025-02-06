import { GradientText } from "@/components/gradient-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Contact Me",
  description:
    "Get in touch with Atilla Cantay Gül, a skilled Software Engineer specializing in crafting user-centric solutions using React, Next.js, .js and more.",
  url: "/contact",
  ogImageUrl: "/og-image.jpg",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success: string; message?: string }>;
}) {
  const success = (await searchParams).success;
  const message = (await searchParams).message;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-white min-h-screen animate-fade-in">
      <h1 className="text-5xl font-extrabold text-center mb-8 animate-fade-in-up">
        <GradientText>Contact Me</GradientText>
      </h1>

      <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
        I&apos;d love to hear from you! Whether you have a question about a
        project, want to collaborate, or just want to say hi, feel free to reach
        out. I&apos;ll do my best to respond to your message as soon as
        possible. Let&apos;s create something great together!
      </p>

      <form
        action="/api/contact"
        method="post"
        className="bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 animate-slide-in-left"
        aria-labelledby="contact-form"
      >
        <h2 id="contact-form" className="text-2xl font-bold text-gray-100 mb-4">
          Get in Touch
        </h2>
        {message && (
          <p className={success === "true" ? "text-green-500" : "text-red-500"}>
            {message}
          </p>
        )}
        <div className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            aria-label="Your Message"
            className="bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            required
          />
        </div>
        <Button
          type="submit"
          variant="default"
          className="w-full py-3 mt-4 text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-red-600  rounded-lg shadow-md"
        >
          Send Message
        </Button>
      </form>

      <div className="mt-12 text-center animate-fade-in-up">
        <p className="text-gray-400">
          Alternatively, you can reach me directly at{" "}
          <Link
            href="mailto:atillacantay@gmail.com"
            className="text-purple-500 hover:text-purple-400 hover:underline"
          >
            atillacantay@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
}
