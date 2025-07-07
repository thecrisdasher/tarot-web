import { FC } from "react";

interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem: FC<NavItemProps> = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="relative text-white font-medium text-lg tracking-wide transition-all duration-300 hover:text-yellow-300 nav-text-glow"
      >
        {text}
      </a>
    </li>
  );
};
