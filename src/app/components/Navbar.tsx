"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2  ${
          path === url && "text-violet-400 border-violet-400 "
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>;
  logoUrl: string;
  logoText: string;
}) {
  return (
    <header className="flex items-center justify-around max-w-screen-xxl m-auto w-screen pl-5 pr-5">
      <Link href="/">
        <img src={logoUrl} alt={logoText} width={50} />
      </Link>
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
