"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  title: string;
  path: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Experience",
      path: "/experience",
    },
    {
        title: "TBD",
        path: "/404",
    },
  ];

  return (
    <nav className="bg-black bg-opacity-90 text-white w-full p-2 sticky top-0 z-50 border-b border-gray-500">
  <ul className="flex justify-around list-none m-0 p-0">
    {navLinks.map((link, index) => (
      <li key={index} className="mx-2 my-3 relative">
        <a
          href={link.path}
          className={`text-gray-400 no-underline hover:text-white text-lg lg:text-xl relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
            pathname === link.path ? 'text-white' : ''
          }`}
        >
          {link.title}
        </a>
      </li>
    ))}
  </ul>
</nav>
  );
};

export default Navbar;
