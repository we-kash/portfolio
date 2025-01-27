"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";

const projects = [
  {
    id: 1,
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: "A modern and responsive frontend project.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "#",
    github: "#",
  },
  {
    id: 2,
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    description: "A robust fullstack application.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description: "An elegant and performant frontend project.",
    stack: [{ name: "React" }, { name: "TypeScript" }],
    image: "/assets/work/thumb3.png",
    live: "#",
    github: "#",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const verticalVariants = {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "-100%" },
  };

  const horizontalVariants = {
    initial: { x: "100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
  };

  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.2, duration: 0.3, ease: "easeIn" },
            }}      
            className="min-h-[80vh] flex flex-col justify-center py-4">
        
       
      </motion.div>
  );
};

export default Carousel;

/**
 * 
//    Dot Navigation 
     <div className="flex justify-center gap-2 mb-5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-accent" : "bg-white/20"
              }`}
            ></button>
          ))}
        </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          //  Left Panel (Vertical Transition) 
          <div className="w-full lg:w-[50%] h-[80vh] overflow-hidden relative">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 flex flex-col  items-left bg-[#1d1d20] text-white`}
                initial="initial"
                animate={activeIndex === index ? "animate" : null} // Use null to avoid redundant animations
                exit={activeIndex === index ? "exit" : null} // Explicit control for exit animation
                variants={verticalVariants}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-8xl font-extrabold text-transparent text-outline mb-5 ">{project.num}</h2>
                <h3 className="text-5xl font-bold mt-4">{project.category} Project</h3>
                <p className="mt-4 text-white/70 text-justify">{project.description}</p>
                <ul className="mt-4 text-2xl flex gap-4 text-accent">
                  {project.stack.map((item, idx) => (
                    <li key={idx}>
                      {item.name}
                      {idx < project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20 mt-8"></div>
                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={project.live}
                    className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center group"
                  >
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </a>
                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center group"
                  >
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          //  Right Panel (Horizontal Transition) 

          <div className="w-full lg:w-[50%] h-[70vh] overflow-hidden relative">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex justify-center items-center bg-[#2a2a2f]"
                initial="initial"
                animate={activeIndex === index ? "animate" : null} // Use null to avoid redundant animations
                exit={activeIndex === index ? "exit" : null} // Explicit control for exit animation
                variants={horizontalVariants}
                transition={{ duration: 0.8 }}
              >
                <div className="w-[90%] h-[90%] relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} Image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
*/