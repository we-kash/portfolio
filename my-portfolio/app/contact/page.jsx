"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 8962817772",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "vikash211004@gmail.com",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            {/* <div className="h-[150] bg-[green] text-center text-8xl">suck it</div> */}
            
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-[30px]">
                        {/* Form Section */}
                        <div className="xl:w-[54%] order-2 xl:order-none">
                            <form
                                className="flex flex-col gap-6 p-10 bg-gray-800 rounded-xl"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // Add your form submission logic here
                                    alert("Form submitted!");
                                }}
                            >
                                <h3 className="text-4xl text-accent">Let's work together</h3>
                                <p className="text-white/60">
                                    Hustlers Assemble!!!
                                </p>

                                {/* Input Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstname" className="sr-only">
                                            First Name
                                        </label>
                                        <Input id="firstname" type="text" placeholder="Firstname" required />
                                    </div>
                                    <div>
                                        <label htmlFor="lastname" className="sr-only">
                                            Last Name
                                        </label>
                                        <Input id="lastname" type="text" placeholder="Lastname" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Email Address
                                        </label>
                                        <Input id="email" type="email" placeholder="Email address" required />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">
                                            Phone Number
                                        </label>
                                        <Input id="phone" type="tel" placeholder="Phone number" />
                                    </div>
                                </div>

                                {/* Select Field */}
                                <div>
                                    <label htmlFor="service" className="sr-only">
                                        Select a Service
                                    </label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select a service</SelectLabel>
                                                <SelectItem value="web-development">Web Development</SelectItem>
                                                <SelectItem value="ui-ux">UI/UX</SelectItem>
                                                <SelectItem value="backend-development">Backend Development</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Textarea Field */}
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        className="h-[200px]"
                                        placeholder="Type your message here."
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button size="md" type="submit" className="max-w-40">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                            <ul className="flex flex-col gap-8 sm:gap-10">
                                {info?.length > 0 ? (
                                    info.map((item, index) => (
                                        <li key={index} className="flex items-center gap-6">
                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-800 text-accent rounded-md flex items-center justify-center">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <p className="text-white/60">No information available.</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

        
        </motion.section>
    );
};

export default Contact;