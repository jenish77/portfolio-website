"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0,scale:0.5 }}
          animate={{ opacity: 1,scale:1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600  ">
              Hello I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jenish",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Devloper",
                1000,
                "Mobile Devloper",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={80}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum, ab suscipit sapiente. Nostrum explicabo debitis in
            magni repudiandae molestias aperiam aspernatur. Optio obcaecati
            reiciendis voluptatum. Eligendi, aperiam!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-500 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0,scale:0.5 }}
          animate={{ opacity: 1,scale:1 }}
          transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.avif"
              width="300"
              height="300"
            /> */}
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.avif"
              width="300"
              height="300"
              style={{ borderRadius: "50%" }}
              alt="Hero Image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
