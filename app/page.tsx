import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Software Engineer Portfolio",
  description:
    "Explore the portfolio of Atilla Cantay Gül, a skilled Software Engineer with expertise in Front-End and Full-Stack development using React, Next.js, Vue, and more.",
  url: "/",
  ogImageUrl: "/og-image.jpg",
});

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
