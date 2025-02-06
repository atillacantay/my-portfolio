import Link from "next/link";
import { RefObject } from "react";

type LinkProps = typeof Link extends (props: infer P) => unknown ? P : never;

interface NavLinkProps extends LinkProps {
  ref?: RefObject<HTMLAnchorElement>;
}

export const NavLink = ({ ref, href, children, ...rest }: NavLinkProps) => (
  <Link
    href={href}
    ref={ref}
    className="text-gray-300 hover:text-purple-400 focus:text-purple-500 focus:outline-none px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    aria-current={href === "/" ? "page" : undefined}
    {...rest}
  >
    {children}
  </Link>
);
