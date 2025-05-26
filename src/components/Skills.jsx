import React from 'react';
import { SiScratch, SiPython, SiDjango, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaJava, FaStar, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title flex items-center gap-2"><FaStar />Skills</h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Scratch", icon: <SiScratch />, percentage: 100, color: "bg-orange-600" },
              { name: "Python", icon: <SiPython />, percentage: 90, color: "bg-blue-400" },
              { name: "Java", icon: <FaJava />, percentage: 30, color: "bg-yellow-400" },
              { name: "HTML", icon: <SiHtml5 />, percentage: 100, color: "bg-red-400" },
              { name: "CSS", icon: <SiCss3 />, percentage: 100, color: "bg-blue-400" },
              { name: "JavaScript", icon: <SiJavascript />, percentage: 60, color: "bg-green-400" },
              { name: "React", icon: <SiReact />, percentage: 60, color: "bg-cyan-400" },
              { name: "Tailwind", icon: <SiTailwindcss />, percentage: 60, color: "bg-teal-400" },
              { name: "Django", icon: <SiDjango />, percentage: 40, color: "bg-orange-400" },
              { name: "Node.js", icon: <FaNodeJs />, percentage: 20, color: "bg-green-600" },
            ].map((skill, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:shadow-xl hover:p-5 duration-500"
              >
                <div className="flex items-center justify-center mb-2 text-3xl gap-2">
                  <div className="animate-spin"> {skill.icon} </div>
                  <span className="font-semibold text-2xl">{skill.name}</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-l font-medium ">{skill.name}</div>
                    <div className="text-l font-medium">{skill.percentage}%</div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="bg-bg rounded-full h-2.5 w-full">
                      <div
                        className={`${skill.color} h-2.5 rounded-full`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
