const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm Harshpreet, a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> with a strong foundation in the MERN stack.
          <br />
          I love building clean, functional UIs, and delivering smooth user experiences. I’ve also worked in IT Sales, gaining valuable insight into the business side of tech. Currently pursuing B.Tech in Computer Science and actively exploring projects that merge development with analytics.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Node.js', 'MongoDB', 'Tailwind', 'Python', 'Salesforce', 'Vite', 'SQL'].map(skill => (
            <span key={skill} className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow text-sm text-gray-800 dark:text-gray-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
