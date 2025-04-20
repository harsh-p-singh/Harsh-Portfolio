import harshImage from "../assets/harsh3-Photoroom.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-6 pt-24 md:pt-32">
      
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, I'm <span className="text-blue-600 dark:text-blue-400">Harshpreet</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Full Stack Developer | MERN Stack | Lifelong Learner | UI/UX Explorer
        </p>
        <a href="#projects">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            View Projects
          </button>
        </a>
        
        <a href="https://drive.google.com/file/d/1Ep-JZolCvApdkUHSC4nFa2IZ_qlkMRW2/view?usp=sharing">
          <button className="ml-4 bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition">
          📄 Hire Me
          </button>
        </a>

      </div>

      <div className="md:w-1/2 flex justify-center">
        <img src={harshImage} alt="Harshpreet" className="w-72 h-80 md:w-96 md:h-[26rem] object-cover object-top rounded-[50%_50%_48%_52%/50%_60%_40%_50%] shadow-xl"/>
      </div>
    </section>
  );
};

export default Hero;
