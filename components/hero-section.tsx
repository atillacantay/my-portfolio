import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GradientText } from "./gradient-text";

export const HeroSection: React.FC = () => {
  return (
    <div
      className="max-w-3xl mx-auto text-center py-20 px-4 sm:px-6 lg:px-8 relative animate-fade-in-up"
      role="banner"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-b from-purple-700 via-indigo-600 to-gray-900 opacity-30 w-full h-full rounded-lg blur-3xl"></div>
      </div>

      <h1
        id="hero-title"
        className="text-5xl font-extrabold tracking-tight text-white mb-6"
      >
        I am <GradientText>Atilla Cantay Gül</GradientText>
      </h1>

      <p
        id="hero-description"
        className="text-xl text-gray-300 font-medium mb-10"
      >
        As a passionate{" "}
        <GradientText className="from-purple-300 via-pink-400 to-red-300">
          Software Engineer
        </GradientText>
        , I specialize in empowering businesses to thrive in the digital
        landscape by crafting scalable applications, captivating user
        experiences and robust systems. Let’s shape the future—together.
      </p>

      <div
        className="flex justify-center space-x-8 mt-10 animate-fade-in-up"
        aria-label="Social media links"
      >
        <Link
          href="https://github.com/atillacantay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub className="h-8 w-8 hover:scale-110 transform transition-transform duration-300" />
        </Link>
        <Link
          href="https://linkedin.com/in/atillacantay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin className="h-8 w-8 hover:scale-110 transform transition-transform duration-300" />
        </Link>
        <Link
          href="mailto:atillacantay@gmail.com"
          className="text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          aria-label="Send me an email"
        >
          <FaEnvelope className="h-8 w-8 hover:scale-110 transform transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};
