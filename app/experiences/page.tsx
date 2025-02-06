import { GradientText } from "@/components/gradient-text";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { experiences } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Experiences",
  description:
    "Explore the professional experience of Atilla Cantay Gül, a skilled Software Engineer with extensive experience in Front-End and Full-Stack development.",
  url: "/experiences",
  ogImageUrl: "/og-image.jpg",
});

export default function ExperiencePage() {
  return (
    <div
      className="mx-auto py-16 px-6 text-white min-h-screen"
      aria-labelledby="experiences-title"
    >
      <div className="mb-12 text-center">
        <h1
          id="experiences-title"
          className="text-5xl font-extrabold mb-6 animate-fade-in-down"
        >
          <GradientText>Professional Experiences</GradientText>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-100"
          aria-describedby="timeline-description"
        >
          Over the years, I&apos;ve had the privilege of collaborating with
          innovative teams, contributing to impactful projects and solving
          complex technical challenges.
        </p>
      </div>

      <section aria-labelledby="timeline-heading" className="mb-12">
        <h2 id="timeline-heading" className="sr-only">
          Timeline of Experience
        </h2>
        <Timeline>
          {experiences.map((experience, index: number) => (
            <TimelineItem
              key={index}
              className={`mb-10 ${
                index % 2 === 0
                  ? "animate-fade-in-left"
                  : "animate-fade-in-right"
              }`}
            >
              <TimelineSeparator>
                <TimelineDot className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 rounded-sm" />
                {index < experiences.length - 1 && (
                  <TimelineConnector className="bg-gray-600" />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <TimelineTitle className="text-2xl font-semibold text-purple-300">
                  {experience.title}
                </TimelineTitle>
                <TimelineDescription className="text-sm text-gray-400 mt-1 italic">
                  {experience.date}
                </TimelineDescription>
                <TimelineDescription className="text-gray-200 mt-4 leading-loose">
                  {experience.description}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </section>

      <div className="text-center animate-fade-in-up animate-delay-300">
        <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-5xl mx-auto">
          Interested in learning more? Discover the impact of my work by
          exploring the{" "}
          <Link
            href="/projects"
            className="font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 transition duration-300 ease-in-out"
          >
            Projects
          </Link>{" "}
          page, where I showcase the skills and solutions that drive success.
          Let’s build something incredible together!
        </p>
        <Link
          href="/contact"
          className="inline-block text-lg font-bold px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-md shadow-lg text-white hover:from-purple-600 hover:via-pink-600 hover:to-red-500 transition duration-300"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
