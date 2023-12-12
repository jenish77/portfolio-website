"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievenmentsList = [
  {
    metric: "Projects",
    value: "10+",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1000",
  },
  {
    metric: "Awards",
    value: "5",
  },
  {
    metric: "Years",
    value: "2+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-4 sm:px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievenmentsList.map((achievenment, index) => {
          return (
            <div key={index} className="flex flex-col items-center my-4 sm:my-0">
              <h2 className="text-white text-2xl sm:text-4xl font-bold flex flex-row items-center">
                {achievenment.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievenment.value)}
                  className="text-white text-2xl sm:text-4xl font-bold ml-1"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievenment.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-xs sm:text-base mt-2">{achievenment.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
