import Link from "next/link";
import { HiBriefcase, HiFolder, HiHome, HiMail, HiUser } from "react-icons/hi";

export const CompactNavigationLinks: React.FC = () => {
  const links = [
    { href: "/", label: "Home", icon: HiHome },
    { href: "/about", label: "About", icon: HiUser },
    { href: "/experiences", label: "Experiences", icon: HiBriefcase },
    { href: "/projects", label: "Projects", icon: HiFolder },
    { href: "/contact", label: "Contact", icon: HiMail },
  ];

  return (
    <nav className="block md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-t-lg shadow-lg">
        <ul className="flex justify-around p-2">
          {links.map((link) => (
            <li key={link.href} className="text-center">
              <Link
                href={link.href}
                className="flex flex-col items-center px-2 py-3 text-sm font-medium text-white hover:bg-white/20 rounded-md transition-colors duration-300"
              >
                <link.icon className="h-6 w-6 mb-1" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
