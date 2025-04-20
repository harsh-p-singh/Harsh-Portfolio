import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow fixed w-full z-50">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Harshpreet</div>

      <div className="hidden md:flex space-x-6">
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-xl">
          <FaSun className="hidden dark:inline" />
          <FaMoon className="inline dark:hidden" />
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-16 right-0 bg-white dark:bg-gray-800 w-full flex flex-col items-center space-y-4 py-4 shadow-lg">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
