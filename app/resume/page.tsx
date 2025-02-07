import { GradientText } from "@/components/gradient-text";
import PdfViewer from "@/components/pdf-viewer";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "My Resume",
  description:
    "View the resume of Atilla Cantay Gül, a skilled Software Engineer specializing in crafting user-centric solutions using React, Next.js and more.",
  url: "/resume",
  ogImageUrl: "/og-image.jpg",
});

export default function ResumePage() {
  return (
    <div className="min-h-screen text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl font-extrabold mb-4">
            <GradientText>My Resume</GradientText>
          </h1>
          <p className="text-lg text-gray-300">
            Take a look at my professional journey and experience.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8 animate-slide-in-left">
          <PdfViewer
            data="/resume.pdf"
            alt="My Resume"
            aria-labelledby="resume"
          />
        </div>
      </div>
    </div>
  );
}
