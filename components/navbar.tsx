import React from 'react';

interface NavLink {
  title: string;
  path: string;
}

const Navbar: React.FC = () => {
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
        title: "For Fun",
        path: "/experience",
      },
  ];

  return (
    <nav className="bg-black text-white w-full p-2 sticky top-0 z-50 border-b border-gray-500">
      <ul className="flex justify-around list-none m-0 p-0">
        {navLinks.map((link, index) => (
          <li key={index} className="mx-2 my-3">
            <a href={link.path} className="text-gray-400 no-underline hover:text-white text-lg lg:text-xl">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
