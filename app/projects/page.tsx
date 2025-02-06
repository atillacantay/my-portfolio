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
    <div
      className="mx-auto px-8 py-16 text-white min-h-screen"
      aria-labelledby="projects-title"
    >
      <div className="text-center mb-12">
        <h1
          id="projects-title"
          className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-fade-in-down"
        >
          <GradientText>Projects</GradientText>
        </h1>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
          A collection of impactful projects crafted with cutting-edge
          technologies, showcasing my expertise in building innovative
          solutions.
        </p>
      </div>

      {Object.keys(projectsByCompany).map((company, companyIndex) => (
        <section
          key={companyIndex}
          className="mb-16"
          aria-labelledby={`company-${companyIndex}`}
        >
          <h2
            id={`company-${companyIndex}`}
            className="text-3xl font-semibold mb-8 text-blue-400 animate-fade-in-left"
          >
            {company}
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            aria-label={`Projects by ${company}`}
          >
            {projectsByCompany[company].map((project, projectIndex) => (
              <Card
                key={projectIndex}
                className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-100">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {`Part of ${company}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4 text-gray-300" role="list">
                    {project.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2" role="list">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-3 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
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
    </div>
  );
}
