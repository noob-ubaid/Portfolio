import React from "react";
import Container from "../../shared/Container";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/animation.json";
const AboutMe = () => {
  return (
    <Container>
      <h2 className="text-4xl md:text-5xl text-main text-center font-semibold mt-16  md:mt-24">
        About Me
      </h2>
      <div className="flex items-center justify-between gap-12 flex-col-reverse lg:flex-row-reverse">
        <div className="flex-1 flex-col flex items-center justify-center gap-4">
          <p className=" text-gray-300/70">
            Hi, I’m Ubaidur Rahman, a 17-year-old web developer. I started my
            development journey by building small frontend projects with HTML,
            CSS, and JavaScript, later moving into the MERN stack to build
            dynamic web apps. I enjoy creating user-friendly interfaces and
            solving real-world problems through code.
          </p>
          <p className=" text-gray-300/70">
            I love frontend development and making designs interactive, but I
            also enjoy building full-stack apps and working with APIs to create
            complete products.
          </p>
          <p className=" text-gray-300/70">
            Outside programming, I enjoy playing football, exploring tech
            content, and sketching simple art to refresh my mind.
          </p>
          <p className=" text-gray-300/70">
            I’m a curious learner who loves building practical solutions and
            sharing knowledge while continuously improving as a developer.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Lottie
            animationData={codingAnimation}
            className="md:h-[450px] md:w-[450px] h-[300px] w-[300px]"
            loop={true}
          />
        </div>
      </div>
      <div className="bg-main blur-[100px] hidden md:block  size-36 absolute top-[1200px] right-2"></div>
    </Container>
  );
};

export default AboutMe;
