"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    description: "Passionate software engineer with expertise in Java and web development, actively contributing to impactful projects.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Vikash Saxena",
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Years",
        },
        {
            fieldName: "Email",
            fieldValue: "vikash211004@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
    ],
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Highlights of my professional journey so far.",
    items: [
        {
            company: "Accenture",
            position: "Software Engineer",
            duration: "Aug 2024 - Present",
        },
        {
            company: "Astarix Agency",
            position: "Augmented Reality Intern",
            duration: "Jun 2023 - Jan 2024",
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Academic qualifications that shaped my skills.",
    items: [
        {
            institution: "Jaypee University of Engineering and Technology",
            degree: "BTech"+" CGPA: 8.5/10.0",
            duration: "July 2020 - June 2024",
        },
        {
            institution: "Army Public School, Allahabad",
            degree: "Class XII: 81.2%, Class X: 91.2%",
            duration: "Completed in 2020",
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description: "A snapshot of my technical expertise.",
    skillList: [
        {
            icons: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icons: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icons: <FaJs />,
            name: "JavaScript",
        },
        {
            icons: <FaReact />,
            name: "React.js",
        },
        {
            icons: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icons: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icons: <FaNodeJs />,
            name: "Node.js",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* Content Section */}
                    <div className="min-h-[80vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <p className="text-white/60">{item.company}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <p className="text-white/60">{item.institution}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full ">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index} className="bg-[#232329] h-[150px] rounded-xl flex justify-center items-center">
                                            <div className="text-6xl text-accent">{skill.icons}</div>
                                            <p className="mt-2 text-white/80 capitalize">{skill.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl text-white/80">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
