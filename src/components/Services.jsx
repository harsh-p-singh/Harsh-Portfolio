import { motion } from 'framer-motion';
import { FaTools, FaLightbulb, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaTools className="text-4xl text-indigo-500" />,
    title: "Full-Stack Development",
    desc: "Building modern, responsive, and scalable web applications using the MERN stack.",
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    title: "Creative UI/UX",
    desc: "Designing intuitive and user-friendly interfaces with clean layouts and modern aesthetics.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
    title: "Responsive Design",
    desc: "Ensuring seamless experiences across all devices, from desktops to smartphones.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Services I Offer
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{service.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
