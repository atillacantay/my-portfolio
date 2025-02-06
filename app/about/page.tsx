import { GradientText } from "@/components/gradient-text";
import { Badge } from "@/components/ui/badge";
import { softSkills, technicalSkills, tools } from "@/lib/constants";
import { generateMetadata } from "@/lib/metadata";

interface BadgeListProps {
  items: string[];
  title: string;
}

const BadgeList: React.FC<BadgeListProps> = ({ items, title }) => {
  return (
    <section
      aria-labelledby={`badge-list-${title.toLowerCase().replace(/\s/g, "-")}`}
      className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
    >
      <h2
        id={`badge-list-${title.toLowerCase().replace(/\s/g, "-")}`}
        className="text-2xl text-gray-100 font-extrabold mb-6"
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-2" role="list">
        {items.map((item, index) => (
          <Badge
            key={index}
            className="px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            tabIndex={0}
            role="listitem"
          >
            {item}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export const metadata = generateMetadata({
  title: "About Me",
  description:
    "Discover Atilla Cantay Gül's expertise in Front-End & Full-Stack development with mastery of React, Vue.js, Next.js, Node.js and modern technologies.",
  url: "/about",
  ogImageUrl: "/og-image.jpg",
});

export default function AboutPage() {
  return (
    <section
      className="pb-12 text-white min-h-screen"
      aria-labelledby="about-main-title"
    >
      <div
        className="max-w-5xl mx-auto py-12 px-4 sm:px-6 md:px-8 text-center animate-fade-in-down"
        aria-labelledby="about-title"
        aria-describedby="introduction"
      >
        <h1
          id="about-title"
          className="text-4xl sm:text-5xl font-extrabold mb-8"
        >
          <GradientText>About Me</GradientText>
        </h1>
        <p
          id="introduction"
          className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
        >
          Hello! I&apos;m <strong>Atilla Cantay Gül</strong>, a passionate
          Software Engineer with extensive experience in building intuitive,
          scalable and user-friendly digital solutions. Let me guide you through
          my journey of developing extraordinary software.
        </p>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12"
        aria-labelledby="main-title"
      >
        <aside
          className="lg:col-span-1 max-h-fit md:sticky md:top-20 md:left-0 bg-gray-800 rounded-lg p-8 shadow-lg animate-slide-in-left"
          aria-labelledby="who-i-am"
        >
          <h2
            id="who-i-am"
            className="text-3xl font-extrabold text-gray-200 mb-6"
          >
            Who I Am
          </h2>
          <div>
            <p className="text-gray-300 leading-loose">
              I&apos;m a forward-thinking Software Engineer with 4+ years of
              professional experience in building intuitive, scalable and
              user-centric applications.
            </p>
            <p className="text-gray-300 mt-4 leading-loose">
              My technical expertise lies in working with advanced web
              technologies like <strong>JavaScript</strong>,{" "}
              <strong>TypeScript</strong>, <strong>React</strong>,{" "}
              <strong>Vue.js</strong> and developing server-side solutions using{" "}
              <strong>Node.js</strong>.
            </p>
            <p className="text-gray-300 mt-4 leading-loose">
              Beyond coding, I enjoy learning new technologies, collaborating in
              cross-functional teams and continuously pushing the boundaries of
              software development.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-12 animate-fade-in-up top-24">
          <BadgeList items={technicalSkills} title="Technical Skills" />
          <BadgeList items={tools} title="Tools & Technologies" />
          <BadgeList items={softSkills} title="Soft Skills" />
        </div>
      </div>
      <section
        className="mt-12 text-center px-4 sm:px-6 md:px-8 animate-fade-in-up"
        aria-labelledby="core-beliefs"
      >
        <h2
          id="core-beliefs"
          className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
        >
          My Core Beliefs
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          <q className="font-bold italic">
            Great software goes beyond just functionality—it creates meaningful
            impact.
          </q>{" "}
          I strive to craft solutions that enhance users&apos; lives, empower
          businesses and leverage cutting-edge technologies to innovate and
          inspire.
        </p>
      </section>
    </section>
  );
}
