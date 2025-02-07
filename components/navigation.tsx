import { NavLink } from "./nav-link";

export const Navigation = () => {
  return (
    <div
      className="hidden md:flex items-center space-x-6"
      aria-label="Main Navigation"
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/experiences">Experiences</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </div>
  );
};
