import Image from "next/image";
import Link from "next/link";
import { FaAndroid, FaApple, FaCss3, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

const skills = [
  {
    icon: <FaHtml5 className="text-4xl text-white" />, label: "HTML", shadow: false
  },
  {
    icon: <FaCss3 className="text-4xl text-white" />, label: "CSS", shadow: false
  },
  {
    icon: <FaJs className="text-4xl text-white" />, label: "JavaScript", shadow: false
  },
  {
    icon: <FaReact className="text-4xl text-white" />, label: "React", shadow: false
  },
  {
    icon: <FaNodeJs className="text-4xl text-white" />, label: "NestJS", shadow: false
  },
  {
    icon: <FaAndroid className="text-4xl text-white" />, label: "Android", shadow: false
  },

];
const experiences = [

  {
    time: " 6/2025 - Present",
    title: "Software Developer",
    company: "Image Travel & Event",
    logo: "/images/imagetravel.png",
  },
  {
    time: "9/2021 - 6/2025",
    title: "Student",
    company: "Ho Chi Minh City Open University",
    logo: "/images/hcmou.png",
  },
];

export default function Experience() {
  return (
    <section className="section-main bg-secondary-color">
      <div className="flex flex-col md:flex-row md:gap-20">
        {/* Left Column: Intro + Skills */}
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="title-section">Skills and <br />Experience</h1>
            <p className="subtitle-section text-secondary-color">
              I am a software developer, passionate about building web and mobile applications using <span className="font-bold">ReactJS</span>, <span className="font-bold">React Native</span> and <span className="font-bold">NestJS</span>. Hire me — I am eager to learn, contribute and grow with your team!
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Skills</h1>
            <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={"item-skill"}
                  style={{ minHeight: 120 }}
                >
                  <div className="icon-container">
                    {skill.icon}
                  </div>
                  <span className="text-2xl font-bold text-black">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Column: Experience + Avatar + Hire me */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 md:hidden block">Experience</h1>
          <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center pb-6 md:pb-8 ${idx !== experiences.length - 1 ? "border-b-2 border-black" : ""}`}>
                <div className="flex-1 text-lg md:text-xl font-semibold text-gray-800">{exp.time}</div>
                <div className="flex-1 flex items-center">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={60}
                    height={60}
                    className="mr-4 object-contain mb-2 sm:mb-0"
                  />
                  <div>
                    <div className="text-xl md:text-xl font-bold mb-1">{exp.title}</div>
                    <div className="text-base md:text-lg text-secondary-color">{exp.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col items-center justify-center mt-8">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8  flex items-center justify-center bg-[#f7f7f7]">
              <Image src="/images/aboutme.png" alt="Avatar" width={256} height={256} className="object-cover w-full h-full" />
            </div>
            <Link
              href="#contact"
              className="bg-primary-color text-white font-bold px-8 py-3 rounded w-max
                             transition duration-300 hover:opacity-80"
            >
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}       