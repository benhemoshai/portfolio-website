export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img
            src="./profile.jpg"
            alt="Profile"
            className="rounded-full w-40 h-48 md:w-58 md:h-64 object-cover mx-auto shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Shai</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
          I'm a recent Computer Science graduate and a passionate software
              developer. With a strong foundation in programming and
              problem-solving, I am dedicated to building efficient and
              user-friendly applications. My hands-on experience in various
              technologies and eagerness to learn new skills make me ready to
              contribute to impactful projects.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}