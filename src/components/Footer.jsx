import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Harshpreet | All rights reserved
        </p>

        <div className="flex gap-4 text-gray-600 dark:text-gray-300 text-xl">
          <a href="https://github.com/harshpreet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/harshpreet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/harshpreet" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
