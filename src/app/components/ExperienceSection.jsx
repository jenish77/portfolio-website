'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Elaunch Solutions',
      role: 'Software Engineer',
      period: 'Jan 2023 - Present',
      location: 'Surat, Gujarat',
      achievements: [
        'Designed and engineered scalable backend solutions using Node.js and NestJS, building high-performance, resilient client-facing platforms',
        'Enhanced application security in Node.js applications by implementing JWT-based authentication, OAuth authorization, and advanced data encryption strategies',
        'Boosted application performance and scalability by implementing load balancing with Node.js clustering and PM2 process management, efficiently distributing workload and reducing server response time by 40% under peak loads of 15,000 requests per minute',
        'Architected automated CI/CD pipelines integrated with Docker and Kubernetes on Node.js, reducing deployment errors by 95% and accelerating release cycles by 35%',
        'Actively participated in code reviews, providing constructive feedback to foster a culture of learning and improvement',
      ],
    },
    {
      company: 'Bitcoding Solution',
      role: 'Software Engineer Intern',
      period: 'June 2022 - July 2022',
      location: 'Surat, Gujarat',
      achievements: [
        'Designed and implemented responsive, accessible interfaces using React and Next.js, ensuring seamless user interactions across devices',
        'Utilized React Context API and RESTful APIs for efficient state management, eliminating unnecessary re-renders and boosting performance',
        'Integrated RESTful APIs and libraries into React Query/Axios, optimizing data fetching, code-splitting, lazy loading, and image optimization to reduce load times by up to 40%',
        'Collaborated with team members using version control systems like Git to efficiently manage modifications and design tasks',
      ],
    },
  ];

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="section-title">
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className={`mb-12 flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-[hsl(var(--bg-primary))]"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.role}</p>
                      <p className="text-sm text-tertiary">{exp.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full glass text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-left">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
