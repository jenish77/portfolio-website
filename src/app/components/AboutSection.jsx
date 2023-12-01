import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-flow-col-2 gap-8 items-center py8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
        //   className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          src="/images/about.avif"
          width="500"
          height="500"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            Proficient Full Stack Developer with expertise in frontend and
            backend development. Skilled in frontend technologies such as HTML,
            CSS, and JavaScript frameworks (e.g., React, Angular), and
            experienced in backend languages (e.g., Node.js, Python) and
            databases (e.g., MySQL, MongoDB). Demonstrated ability to create
            responsive user interfaces, implement functionalities, manage
            databases, and contribute to the entire software development
            lifecycle. Adaptable and innovative, adept at bridging the gap
            between frontend and backend operations to deliver robust and
            scalable solutions for diverse technological requirements.
          </p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ">skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
