import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";

const testimonials = [
  {
    quote:
      "Your portfolio has a clean and modern design that is visually appealing. The layout is intuitive and easy to navigate.",
    name: "Kartik",
    title: "CEO of Company",
  },
  {
    quote:
      "The projects listed are impressive, showcasing a good mix of technical skills and creativity. Real-world apps like JourneyBound add great credibility.",
    name: "Abhimanyu",
    title: "CEO of Company",
  },
  {
    quote:
      "The portfolio looks great on mobile devices, and responsiveness is a big plus. Definitely recommend!",
    name: "Harsh",
    title: "CEO of Company",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonial"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Testimonials
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm md:text-base">
          What clients say about my work
        </p>

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-3x1 mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className="text-6xl text-blue-500 mb-3 font-serif">“</div> */}

              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed italic">
                {testimonials[index].quote}
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-lg">{testimonials[index].name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[index].title}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 z-10">
            <button
              onClick={prev}
              className="p-2 bg-blue-100 dark:bg-gray-700 rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 transition"
              aria-label="Previous testimonial"
            >
              <HiOutlineArrowLeft className="text-xl text-blue-500 dark:text-white" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 z-10">
            <button
              onClick={next}
              className="p-2 bg-blue-100 dark:bg-gray-700 rounded-full hover:bg-blue-200 dark:hover:bg-gray-600 transition"
              aria-label="Next testimonial"
            >
              <HiOutlineArrowRight className="text-xl text-blue-500 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
