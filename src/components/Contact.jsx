import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/myzebavg" 
          method="POST"
          className="grid gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            required 
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <button 
            type="submit" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
