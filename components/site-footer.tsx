import React from "react";
import Link from "next/link";
import {
  IconBrandX,
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconHelp,
  IconBook,
} from "@/components/icons";

const footerLinks = [
  {
    href: "https://x.com/heliuslabs",
    icon: <IconBrandX />,
  },
  {
    href: "https://discord.gg/HjummjUXgq",
    icon: <IconBrandDiscordFilled />,
  },
  {
    href: "https://github.com/helius-labs",
    icon: <IconBrandGithubFilled />,
  },
  {
    href: "https://docs.helius.dev/",
    icon: <IconBook />,
  },
  {
    href: "https://www.youtube.com/@helius_labs",
    icon: <IconHelp />,
  },
];

export const SiteFooter = () => {
  return (
    <footer className="footer" >
      <nav>
        <ul>
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                {React.cloneElement(link.icon, { size: 18 })}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
