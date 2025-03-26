const AboutMe = () => {
  return (
    <>
      <section className="min-h-screen bg-neutral-900 flex flex-col items-center px-6 sm:px-10">
        <hr className="border-[2px] border-primary w-full max-w-[550px] mt-20 mb-10" />
        <h1 className="text-white text-3xl sm:text-5xl mb-10 font-medium">About Me</h1>

        {/* Texto e imagem lado a lado em telas grandes, em coluna em telas pequenas */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
          <h2 className="text_container w-full sm:max-w-[700px] text-base sm:text-[1.1rem] shadow-2xl shadow-black">
            <span className="font-medium">
              Hello! My name is João Pedro Silva.
            </span>{" "}
            I’m Brazilian, and I’m constantly evolving to become a complete
            front-end developer. Every day, I dedicate myself to learning and
            diving deeper into the latest technologies in the industry. While
            I’m still pursuing my degree, I’m currently focused on freelance
            projects to gain practical experience. <br /> <br />I have a strong
            interest in backend development, but my passion lies in front-end,
            where I can explore my love for design and UI/UX. I always strive to
            deliver my best in every project, ensuring my clients' satisfaction
            with efficient, functional, and visually appealing solutions.
          </h2>

          <img
            className="border-primary border-2 rounded-full h-[200px] sm:h-[300px] w-auto shadow-2xl shadow-black max-w-[80%] sm:max-w-[300px]"
            src="./public/image1.png"
            alt="my photo :)"
          />
        </div>

        {/* Seções de Experiência e Habilidades */}
        <div className="flex flex-col sm:flex-row gap-10 mt-10 text-center sm:text-left">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl sm:text-3xl mt-4 mb-4 font-medium">
              Experience
            </h1>
            <h2 className="text_container w-full flex flex-col gap-4 sm:max-w-[500px] text-sm sm:text-[0.8rem] shadow-2xl shadow-black">
              <div>
              <span className="text-[0.9rem] sm:text-[1.3rem]">
                Systems Analysis and Development - UniSenac
              </span>
              <br /> 2024 - Now
              </div>
              <div>
              <span className="text-[0.9rem] sm:text-[1.3rem]">
                Freelance Work and Personal Projects
              </span>
              <br /> 2024 - Now
              </div>
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="text-white text-2xl sm:text-3xl mt-4 mb-4 font-medium">
              Skills
            </h1>
            <h2 className="text_container mb-[2rem] w-full sm:max-w-[500px] text-sm sm:text-[1.2rem] shadow-2xl shadow-black grid grid-cols-1 sm:grid-cols-2">
              <p>• Visual Design</p>
              <p>• UI/UX Design</p>
              <p>• Intermediate English</p>
              <p>• Front-end Development</p>
              <p>• Figma & Canva</p>
              <p>• Git/Github</p>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
