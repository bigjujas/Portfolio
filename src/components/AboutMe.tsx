const AboutMe = () => {
  return (
    <>
      <section className="flex flex-col items-center py-6 px-1.5">
        <div className="flex flex-col">
          <div className="md:flex md:flex-row-reverse md:gap-4">
            <img
              className="w-30 m-auto border-primary border-2 rounded-full md:w-60"
              src="/image1.jpg"
              alt=""
            />
            <div className="md:max-w-175">
              <h1 className="text-white text-3xl font-medium text-center m-2 md:text-4xl">
                About Me
              </h1>
              <p className="bg-opacitybg border-1 border-lightDarkOrange text-lightText p-4 m-4">
                <span className="font-bold">
                  Hello! My name is João Pedro Silva.
                </span>{" "}
                I’m a Brazilian developer focused on becoming a complete
                fullstack professional. My main passion is frontend development,
                where I love creating beautiful and user-friendly interfaces.
                I’m also building my backend skills to become more versatile.{" "}
                <br /> <br /> I’m always learning new technologies and working
                on freelance projects to gain practical experience. My goal is
                to deliver efficient, functional, and visually appealing
                solutions.
              </p>
            </div>
          </div>
          <div className="md:flex gap-25">
            <div className="md:max-w-100">
              <h1 className="text-white text-3xl font-medium text-center m-2">
                Experience
              </h1>
              <p className="bg-opacitybg text-base items-center border-1 border-lightDarkOrange text-lightText p-4 m-4 md:w-100 md:h-40">
                <span className="font-medium">
                  Systems Analysis and Development
                </span>{" "}
                <br /> 2024 - Now <br /> <br />
                <span className="font-medium">
                  Freelance Work and Personal Projects
                </span>{" "}
                <br /> 2024 - Now
              </p>
            </div>
            <div className="md:max-w-100">
              <h1 className="text-white text-3xl font-medium text-center m-2">
                Skills
              </h1>
              <div className="bg-opacitybg text-sm gap-1 grid grid-cols-2 border-1 items-center border-lightDarkOrange font-medium text-lightText p-4 m-4 md:h-40 md:w-100">
                <p>• Visual Design</p>
                <p>• UI/UX Design</p>
                <p>• Intermediate English</p>
                <p>• Video Editing</p>
                <p>• Figma & Canva</p>
                <p>• Git/Github</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
