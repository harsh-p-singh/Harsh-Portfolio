import { useState } from 'react';
import { motion } from 'framer-motion';
import QuizApp from '../assets/quizApp.png';
import QrCode from '../assets/payment.png';
import weatherImg from '../assets/weather_app.png';
import toast from '../assets/toastnotification.png';
import Background from '../assets/gradientgenerator.png';
import { i } from 'framer-motion/client';
import Expance from '../assets/expencetracer.png';


const projectsData = [
  {
    title: 'Sample Quiz App',
    type: 'UI',
    image: QuizApp,
    link: 'https://samplequizap.netlify.app/'
  },
  {
    title: 'QR Code Generator',
    type: 'Utility',
    image: QrCode,
    link: 'https://qr-codegen1.netlify.app/'
  },
  {
    title: 'Weather Forecast App',
    type: 'API',
    image: weatherImg,
    link: 'https://weatherforecasting10.netlify.app/'
  },
  {
    title: 'Toast Notifications',
    type: 'UI',
    image: toast,
    link: 'https://toastnotification1.netlify.app/'
  },
  {
    title: 'Background Generator',
    type: 'Utility',
    image: Background,
    link: 'https://bestbackgroundgenerator.netlify.app/'
  },
  {
    title: 'Digital Expense Tracker',
    type: 'Utility',
    image: Expance,
    link: 'https://expensetracker.netlify.app/'
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [grid, setGrid] = useState(true);

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">My Projects</h2>
          <div className="flex items-center gap-3">
            <select
              onChange={e => setFilter(e.target.value)}
              className="bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded"
            >
              {['All', 'UI', 'Utility', 'API'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <button onClick={() => setGrid(!grid)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {grid ? 'Carousel View' : 'Grid View'}
            </button>
          </div>
        </div>

        {grid ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-[1.02] transition">
                <img src={project.image} alt={project.title} className="h-40 w-full object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.type} Project</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto flex gap-6 scroll-smooth pb-2"
          >
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="min-w-[300px] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                <img src={project.image} alt={project.title} className="h-40 w-full object-cover rounded mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.type} Project</p>
                <a href={project.link} className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline">View</a>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
