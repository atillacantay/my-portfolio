"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "./nav-link";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRoot = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    menuRoot.current = document.body;
  }, []);

  const menu =
    isOpen && isMounted
      ? createPortal(
          <div
            role="menu"
            className="fixed inset-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-8 z-50"
            aria-label="Mobile menu"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 z-50"
              aria-label="Close navigation menu"
            >
              <FiX className="h-8 w-8 transition-transform duration-300 transform hover:rotate-90" />
            </button>

            <NavLink
              href="/"
              className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              href="/experiences"
              className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Experiences
            </NavLink>
            <NavLink
              href="/projects"
              className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              href="/contact"
              className="text-2xl font-bold hover:text-purple-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>,
          menuRoot.current as HTMLElement
        )
      : null;

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 z-50"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <FiMenu className="h-8 w-8" />
      </button>
      {menu}
    </div>
  );
};
