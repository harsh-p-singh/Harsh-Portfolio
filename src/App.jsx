import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Custom hook for managing dark mode
const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return [dark, setDark];
};

function App() {
  const [dark, setDark] = useDarkMode(); // Using the custom hook

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar toggleTheme={() => setDark(!dark)} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
