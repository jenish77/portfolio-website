"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Mongodb</li>
        <li>Sequlize</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Engineering</li>
        <li>Sarvajanik College of Engineering and Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Codebit solutions</li>
        <li>Elaunch Solutions</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white" style={{ marginTop: '30px' }}>
      <div className="flex flex-col md:flex-row md:gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:w-1/2">
          <Image src="/images/about.avif" width="500" height="500" alt="loading.." />
        </div>
        <div className="md:w-1/2">
          <div className="mt-4 md:mt-0 text-left flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Proficient Full Stack Developer with expertise in frontend and
              backend development. Skilled in frontend technologies such as
              HTML, CSS, and JavaScript frameworks (e.g., React, Angular), and
              experienced in backend languages (e.g., Node.js, Python) and
              databases (e.g., MySQL, MongoDB). Demonstrated ability to create
              responsive user interfaces, implement functionalities, manage
              databases, and contribute to the entire software development
              lifecycle. Adaptable and innovative, adept at bridging the gap
              between frontend and backend operations to deliver robust and
              scalable solutions for diverse technological requirements.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



