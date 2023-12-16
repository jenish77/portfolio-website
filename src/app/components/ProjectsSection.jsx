"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "Fex Wallet",
    description: "Revolutionize your digital assets with our futuristic cryptocurrency management solution, featuring exchange services, robust wallet management, and seamless NFT minting experiences.",
    image: "/images/projects/1.jpg",
    tag: ["All", "mobile"],
    gitUrl: "https://github.com/jenish77/fex-wallet",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ecommerce website",
    description: "Empower your online business with my e-commerce expertise. Elevate user experiences, drive sales, and transform digital commerce through my portfolio of dynamic solutions.",
    image: "/images/projects/4.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/jenish77/ecommerce",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Chat App",
    description: "Embark on a seamless communication journey with our Chat App. Connect effortlessly, share ideas in real-time, and experience a new level of instant, interactive conversations",
    image: "/images/projects/3.jpg",
    tag: ["All", "web"],
    gitUrl: "https://github.com/jenish77/chatapp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NewsSphere",
    description: "Dive into the latest headlines with NewsSphere, your gateway to real-time news. Stay informed, explore diverse perspectives, and navigate the currents of global happenings effortlessly.",
    image: "/images/projects/3.jpg",
    tag: ["All", "web"],
    gitUrl: "https://github.com/jenish77/chatapp",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 50, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-white text-center text-4xl font-bold mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="web"
          isSelected={tag === "web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="mobile"
          isSelected={tag === "mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
