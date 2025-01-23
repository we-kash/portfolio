import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-accent">Resume</span>
            <h1 className="h1 mb-6">
              Here's <span className="text-accent">My Journey</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90 text-justify">
              Below is a snapshot of my experience, projects, skills, and education. Download my resume for detailed insights!
            </p>
            {/* Download Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/path/to/Vikash_Saxena_Resume.pdf"
                download
                className="uppercase flex items-center gap-2 border border-accent text-accent px-4 py-2 rounded-lg hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
            </div>
          </div>
          {/* Resume Details */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 w-full">
            <div className="bg-gray-800 p-6 rounded-lg text-white/80">
              {/* Experience */}
              <h2 className="text-2xl font-bold mb-4 text-accent">Experience</h2>
              <ul className="mb-6 list-disc ml-6">
                <li>
                  <h3 className="font-semibold underline">Software Engineer, Accenture  (August 2024 - Present)</h3>
                  <p>Developed RESTful APIs with Spring Boot, trained in Java tools, and collaborated on enterprise projects.</p>
                </li>
                <li>
                  <h3 className="font-semibold underline">Augmented Reality Intern, Astarix Agency (June 2023 - Jan 2024)</h3>
                  <p>Built immersive AR solutions, enhancing user experience by 30%, and worked on 3 team projects.</p>
                </li>
              </ul>
              <br />
              {/* Projects */}
              <h2 className="text-2xl font-bold mb-4 text-accent">Projects</h2>
              <ul className="mb-6 list-disc ml-6">
                <li>
                  <span className="font-semibold underline">Food Ordering Website<br/></span> Created a seamless platform with React.js, Node.js, and MongoDB.
                </li>
                <li>
                  <span className="font-semibold underline">AR GO (Indoor Navigation)<br/></span> Developed cost-effective navigation using AR Core and Unity.
                </li>
              </ul>
              <br />
              {/* Skills */}
              <h2 className="text-2xl font-bold mb-4 text-accent">Skills</h2>
              <p>C++ | Java | Spring | React.js | Node.js | Unity Engine | MySQL | Git</p>
              <br />
              {/* Education */}
              <h2 className="text-2xl font-bold mb-4 text-accent">Education</h2>
              <ul className="list-disc ml-6">
                <li>
                  <span className="font-semibold">Jaypee University of Engineering and Technology:</span> CGPA: 8.5 (2020 - 2024)
                </li>
                <li>
                  <span className="font-semibold">Army Public School, Allahabad:</span> Class XII: 81.2%, Class X: 91.2%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
