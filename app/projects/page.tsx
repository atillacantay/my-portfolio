import { GradientText } from "@/components/gradient-text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsByCompany } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Projects",
  description:
    "Explore the projects developed by Atilla Cantay Gül, a skilled Software Engineer specializing in Front-End and Full-Stack development.",
  url: "/projects",
  ogImageUrl: "/og-image.jpg",
});

export default function ProjectsPage() {
  return (
    <section
      className="mx-auto px-4 sm:px-6 md:px-8 py-16 text-white min-h-screen"
      aria-labelledby="projects-title"
      aria-describedby="projects-description"
    >
      <div className="text-center mb-12 animate-fade-in-down">
        <h1
          id="projects-title"
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          <GradientText>Projects</GradientText>
        </h1>
        <p
          id="projects-description"
          className="text-base sm:text-lg text-gray-300 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed"
        >
          A collection of impactful projects crafted with cutting-edge
          technologies, showcasing my expertise in building innovative
          solutions.
        </p>
      </div>

      {Object.keys(projectsByCompany).map((company, companyIndex) => (
        <section
          key={companyIndex}
          className="mb-16"
          aria-labelledby={`company-${companyIndex}-title`}
        >
          <h2
            id={`company-${companyIndex}-title`}
            className="text-2xl sm:text-3xl font-semibold mb-8 text-blue-400 animate-fade-in-left"
          >
            {company}
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            aria-labelledby={`company-${companyIndex}-projects`}
          >
            {projectsByCompany[company].map((project, projectIndex) => (
              <Card
                key={projectIndex}
                className="bg-gray-800 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300 animate-fade-in-up"
                aria-labelledby={`project-${companyIndex}-${projectIndex}-title`}
              >
                <CardHeader className="bg-gray-900 p-4 rounded-t-xl">
                  <CardTitle
                    id={`project-${companyIndex}-${projectIndex}-title`}
                    className="text-lg sm:text-xl font-bold text-gray-100"
                  >
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {`Part of ${company}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <ul
                    className="list-disc pl-5 text-gray-300"
                    role="list"
                    aria-label={`${project.name} description`}
                  >
                    {project.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex flex-wrap gap-2 mt-4"
                    role="list"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-2 py-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-sm hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        tabIndex={0}
                        role="listitem"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
