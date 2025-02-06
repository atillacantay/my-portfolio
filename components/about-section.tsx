import { Badge } from "@/components/ui/badge";
import { technicalSkills, tools } from "@/lib/constants";
import { GradientText } from "./gradient-text";

interface BadgeListProps {
  items: string[];
}

const BadgeList: React.FC<BadgeListProps> = ({ items }) => {
  return (
    <div
      className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up"
      role="list"
      aria-label="Skill List"
    >
      {items.map((item, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="px-3 py-1 text-sm font-medium bg-gray-700 text-gray-200 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          tabIndex={0}
          role="listitem"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};

interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      className="container mx-auto py-16 px-4 sm:px-6 md:px-12 lg:px-16 text-gray-300 animate-fade-in-up"
      aria-labelledby="about-title"
      aria-describedby="about-details"
    >
      <h2
        id="about-title"
        className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center leading-tight tracking-tighter"
      >
        About Me
      </h2>

      <p className="mb-8 text-base sm:text-lg text-gray-400 text-center max-w-3xl mx-auto leading-relaxed  animate-fade-in-up">
        With over <GradientText>4 years</GradientText> of experience in{" "}
        <GradientText>
          <strong>Front-End</strong>
        </GradientText>{" "}
        and{" "}
        <GradientText>
          <strong>Full-Stack</strong>
        </GradientText>{" "}
        development, I specialize in developing intuitive, scalable and
        user-centered digital solutions. My expertise includes cutting-edge
        technologies like{" "}
        <GradientText>
          <strong>JavaScript</strong>
        </GradientText>
        ,{" "}
        <GradientText>
          <strong>TypeScript</strong>
        </GradientText>
        ,{" "}
        <GradientText>
          <strong>React</strong>
        </GradientText>
        ,{" "}
        <GradientText>
          <strong>Next.js</strong>
        </GradientText>
        ,{" "}
        <GradientText>
          <strong>Vue.js</strong>
        </GradientText>{" "}
        and{" "}
        <GradientText>
          <strong>Node.js</strong>
        </GradientText>
        . Driven by a passion for innovation, I aim to transform ideas into
        impactful software solutions.
      </p>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-down"
        aria-labelledby="technologies-and-tools"
      >
        <div>
          <h3
            id="technical-skills-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-2"
          >
            Technical Skills
          </h3>
          <BadgeList items={technicalSkills} />
        </div>

        <div>
          <h3
            id="tools-heading"
            className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-2"
          >
            Tools & Technologies
          </h3>
          <BadgeList items={tools} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
