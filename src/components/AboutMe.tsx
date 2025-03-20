const AboutMe = () => {
  return (
    <>
      <section className="h-[100vh] bg-neutral-900 flex flex-col items-center">
        <hr className="border-[2px] border-primary w-[550px] mt-[8rem] mb-[4rem]" />
        <h1 className="text-white text-5xl mb-[5vh] font-medium">About Me</h1>
        <div className="flex gap-10">
          <h2 className="text_container w-[700px] text-[1.1rem] shadow-2xl shadow-black">
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
            className="border-primary border-2 rounded-full h-[300px] w-auto shadow-2xl shadow-black"
            src="./public/image1.png"
            alt="my photo :)"
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl mt-[3vh] mb-[2vh] font-medium">
              Experience
            </h1>
            <h2 className="text_container w-[500px] text-[0.8rem] shadow-2xl shadow-black">
              <span className="text-[1.3rem]">
                Systems Analysis and Development - UniSenac
              </span>
              <br /> 2024 - Now
              <br />
              <span className="text-[1.3rem]">
                Freelance Work and Personal Projects
              </span>
              <br /> 2024 - Now
            </h2>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-3xl mt-[3vh] mb-[2vh] font-medium">
              Skills
            </h1>
            <h2 className="text_container w-[500px] text-[1.2rem] shadow-2xl shadow-black grid grid-cols-2">
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
