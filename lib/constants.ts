export const BASE_URL = "https://atilla-dev.vercel.app";

export const technicalSkills = [
  // Programming Languages
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",

  // Frontend Frameworks & Libraries
  "React",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "Redux",
  "Vite",
  "Tailwind CSS",
  "Shadcn/UI",
  "Material UI",
  "Storybook",

  // Backend Development & API Integration
  "Node.js",
  "NestJS",
  "Express.js",
  "REST APIs",
  "GraphQL (Apollo/Client)",
  "WebSocket",

  // Databases & Data Handling
  "PostgreSQL",
  "MongoDB",

  // CMS & E-Commerce Platforms
  "Contentful",
  "Storyblok",
  "Commercetools",

  // Development Principles & Best Practices
  "Responsive Design",
  "Performance Optimization",
  "Web Accessibility (WCAG)",
  "Cross-Browser Compatibility",
  "SEO Optimization",
];

export const tools = [
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Jira",
  "Confluence",
  "Microsoft Teams",
  "Slack",
  "Figma",
  "VSCode",
  "Vercel",
];

export const experiences = [
  {
    title: "Software Engineer at EPAM Systems",
    date: "05/2024 - Present",
    description:
      "Leading the development of scalable web solutions for global enterprises using cutting-edge technologies and modern architectural patterns.",
  },
  {
    title: "Software Engineer at WittyCommerce (Emakina Group & EPAM Systems)",
    date: "10/2021 - 05/2024",
    description:
      "Redesigned and optimized e-commerce platforms for enterprise clients, improving performance while implementing personalized user experiences.",
  },
  {
    title: "Full-Stack Developer at Monday Hero",
    date: "09/2020 - 09/2021",
    description:
      "Developed a design-to-code automation tool that streamlined mobile app creation by bridging the gap between designers and developers.",
  },
  {
    title: "Software Intern at Alternet",
    date: "06/2019 - 09/2019",
    description:
      "Created a real-time WebSocket-based note-taking platform with live collaboration and customizable features to enhance productivity.",
  },
];

export const projectsByCompany: Record<
  string,
  {
    name: string;
    descriptions: string[];
    technologies: string[];
  }[]
> = {
  "EPAM Systems": [
    {
      name: "Goody Kitchen Website Proof of Concept (PoC)",
      descriptions: [
        "Rebuilt and optimized application architecture using Next.js to enhance performance and scalability.",
        "Integrated Contentful CMS to streamline content management and improve user experience.",
        "Applied modern development practices to enhance maintainability and reduce technical debt.",
        "Migrated distinct detail pages to provide an improved user experience.",
        "Implemented secure authentication flows leveraging Auth0.",
        "Added features for ratings and reviews to enrich functionality.",
        "Ensured compliance with best practices and industry standards throughout development.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Contentful",
        "Tailwind CSS",
        "GraphQL",
        "Auth0",
      ],
    },
    {
      name: "Goody Kitchen Website",
      descriptions: [
        "Revamped UI/UX using Kentico CMS, static site generation and MVC principles.",
        "Built responsive features with HTML, Tailwind CSS, TypeScript, React, Storybook and Vite for optimized builds.",
        "Delivered a multilingual site with Arabic and English support, including RTL layouts.",
        "Implemented a demo application using Next.js and Contentful CMS, replacing the old architecture to enhance SEO, performance and content management.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "HTML",
        "Tailwind CSS",
        "Storybook",
        "Vite",
        "Static  Site  Generators",
        "Kentico CMS",
        "ASP.NET",
        "Next.js",
        "Contentful",
        "Figma",
      ],
    },
    {
      name: "Nemedio QMS Application",
      descriptions: [
        "Contributed to the development of a multi-tenant SaaS QMS application by implementing end-to-end features using Ruby on Rails for the backend, a GraphQL-based API, PostgreSQL for the database and React with TypeScript for the frontend",
        "Learned and executed deployment processes for testing servers to ensure smooth application functionality.",
        "Designed and created visual aids to present large datasets, enabling stakeholders to analyze data more effectively.",
        "Updated outdated libraries to their latest versions, utilizing new features, improved functionality and enhanced security.",
        "Upgraded React and TypeScript versions after five years, resolving errors during the update process.",
        "Troubleshot application issues and collaborated with operations teams to ensure timely resolution.",
        "Partnered with the product team and graphic designers to develop interfaces that aligned with the product vision and ensured functionality.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Material UI",
        "Ruby on Rails",
        "PostgreSQL",
        "Apollo",
        "Snyk",
        "Circle CI",
        "CK Editor",
        "AG Grid",
        "GraphQL",
        "AWS",
        "Figma",
      ],
    },
    {
      name: "Goody Kitchen AR Microsite",
      descriptions: [
        "Redesigned and enhanced the mobile-exclusive microsite by implementing modern UI/UX principles to boost engagement and accessibility.",
        "Optimized the transition flow between the AR application and the microsite, creating a seamless user experience through efficient state management and smooth animations.",
        "Introduced new interactive features tailored for mobile users, leveraging React and TypeScript to ensure scalability and maintainability.",
        "Collaborated closely with design and backend teams to deliver a polished solution aligned with product vision and user expectations.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Storybook",
        "Webpack",
        "Static Site Generators",
        "Kentico CMS",
        "C#",
        "Figma",
      ],
    },
  ],
  "WittyCommerce (Emakina Group & EPAM Systems)": [
    {
      name: "Berlin Brands Group Webshops",
      descriptions: [
        "Contributed to the development of a multi-tenant SaaS platform using Nuxt, Vue Storefront, Commercetools and Storyblok, launching in Germany and the UK with multi-language, multi-currency and customizable themes.",
        "Built and maintained key features like the Product Detail Page (PDP), new CMS components.",
        "Customized Commercetools and Storyblok CMS, integrated third-party tools like CuratorIO, Dynamic Yield, Adyen and PayPal and optimized components from the Storefront UI Library.",
        "Improved performance, resolved memory leaks and ensured biweekly deployments while introducing new features and functionality.",
        "Collaborated with global teams and backend developers under a Scrum methodology, providing documentation and maintaining clean, scalable code throughout the project.",
        "Designed and developed a product review management interface using React for internal client use.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "Nuxt",
        "Vue Storefront",
        "React",
        "StoryBlok",
        "HTML",
        "CSS",
        "GraphQL",
        "Commercetools",
        "GitHub",
        "Figma",
        "Jira",
        "Tempo for Jira",
        "Confluence",
      ],
    },
    {
      name: "Rivoli Vision & Rivoli Shop",
      descriptions: [
        "Designed and developed a platform for selling prescription and non-prescription glasses, sunglasses, lenses, jewelry, watches and accessories.",
        "Implemented a new website design using Vue Storefront infrastructure and integrated the Contentstack CMS.",
        "Created checkout pages and integrated Checkout.com payment solutions.",
        "Added new features, resolved bugs and enhanced existing pages to improve user experience.",
        "Developed and optimized components within the Contentstack CMS to enhance functionality and usability.",
        "Developed a platform supporting Arabic and English languages with RTL layout for UAE, Oman, Bahrain and Qatar markets.",
        "Improved inherited components from the Storefront UI library to enhance their functionality and adaptability.",
        "Collaborated in a Scrum-based environment, adhering to biweekly release cycles for project delivery.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "Nuxt",
        "Vue Storefront",
        "HTML",
        "CSS",
        "GraphQL",
        "Contentstack",
        "Commercetools",
        "Jira",
        "BitBucket",
        "Slack",
        "Figma",
      ],
    },
  ],
  "Monday Hero": [
    {
      name: "Monday Hero",
      descriptions: [
        "Developed Monday Hero, a platform to convert Figma, AdobeXD and Sketch designs into reusable Swift, Kotlin and Flutter code.",
        "Built an Electron application and a React-based website from scratch, demonstrating full-stack development expertise.",
        "Involved in writing the code and algorithm to process the design data received from Figma.",
        "Created a Figma plugin with UI and authentication flows, available in the Figma store, enabling seamless design transfers to the application.",
        "Authored comprehensive internal documentation on Confluence to enhance team knowledge sharing and collaboration.",
        "Contributed to the development of the Monday Hero NextJS landing page.",
        "Followed Scrum methodology for project management and maintained a weekly release schedule.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Material UI",
        "HTML",
        "ElectronJS",
        "CSS",
        "WebSockets",
        "Swift",
        "Node.js",
        "NestJS",
        "Mongoose",
        "MongoDB",
        "Code Generation",
        "Xcode",
        "Visual Studio Code",
        "Sketch",
        "Jira",
        "GitHub",
        "Figma",
        "Docker",
        "Confluence",
        "BitBucket",
        "Adobe XD",
      ],
    },
  ],
  Alternet: [
    {
      name: "Software Intern",
      descriptions: [
        "Designed and implemented a WebSocket-enabled note-taking platform with real-time interactive note sharing and customizable features.",
        "Built with React, Redux, Node.js, MongoDB and WebSocket, ensuring a responsive and user-friendly experience across devices.",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "WebSocket",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
  ],
  "Undergraduate Thesis Project": [
    {
      name: "Legal Assistance Platform",
      descriptions: [
        "Designed a platform to connect individuals seeking legal assistance with professionals through role-based membership, friendship mechanisms and notice-sharing.",
        "Implemented real-time messaging and notification systems to ensure smooth communication and collaboration between users.",
        "Developed a feature-rich interface for creating, sharing and interacting with legal notices, tailored to streamline legal consultations.",
      ],
      technologies: [
        "JavaScript",
        "React",
        "HTML",
        "Material UI",
        "Node.js",
        "MongoDB",
        "WebSocket",
      ],
    },
  ],
};
