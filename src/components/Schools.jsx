import React from "react";
import { FaJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiScratch, SiPython, SiReact, SiDjango } from "react-icons/si";

const Projects = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Schools & Courses</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500">
            <h3 className="text-3xl font-bold mb-[50px]">SnoopEdu</h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><FaJs />
            </p>
            <p className="text-xl">Learned how to build proper websites here.</p>
            <a href="https://snoopedu.com" className="font-bold text-b">
              Their Website
            </a>
          </div>
          <div className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500">
            <h3 className="text-3xl font-bold mb-[50px]">Algorithmics</h3>
            <p className="text-xl flex items-center">
              Learned: <SiScratch /><SiPython />
            </p>
            <p className="text-xl">My first course related to coding.</p>
            <a
              href="https://algorithmicschool.com"
              className="font-bold text-b"
            >
              Their Website
            </a>
          </div>
          <div className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500">
            <h3 className="text-3xl font-bold mb-[50px]">Coursera Courses</h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><FaJs /><SiReact /><SiDjango /><SiScratch /><SiPython />
            </p>
            <p className="text-xl">Some various courses on coursera, like Meta Front-End & Python for Everybody.</p>
            <a
              href="https://coursera.org"
              className="font-bold text-b"
            >
              Coursera
            </a>
            <a
              href="https://www.coursera.org/professional-certificates/meta-front-end-developer"
              className="font-bold text-b"
            >
              Meta Front-End Course
            </a>
            <a
              href="https://www.coursera.org/professional-certificates/meta-back-end-developer"
              className="font-bold text-b"
            >
              Meta Back-End Course
            </a>
            <a
              href="https://www.coursera.org/learn/learn-to-code-with-ai"
              className="font-bold text-b"
            >
              Scrimba Learn to Code with AI Course
            </a>
            <a
              href="https://www.coursera.org/specializations/python"
              className="font-bold text-b"
            >
              Python for Everybody Course
            </a>
          </div>
          <div className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500">
            <h3 className="text-3xl font-bold mb-[50px]">CS50 Courses</h3>
            <p className="text-xl flex items-center">
              Learned: <SiHtml5 /><SiCss3 /><FaJs /><SiReact /><SiDjango /><SiScratch /><SiPython /> <b>C</b>
            </p>
            <p className="text-xl">This course is a bit more challenging.</p>
            <a
              href="https://cs50.harvard.edu/x"
              className="font-bold text-b"
            >
              CS50x
            </a>
            <a
              href="https://cs50.harvard.edu/scratch"
              className="font-bold text-b"
            >
              CS50 Scratch
            </a>
            <a
              href="https://cs50.harvard.edu/python"
              className="font-bold text-b"
            >
              CS50 Python
            </a>
            <a
              href="https://cs50.harvard.edu/web"
              className="font-bold text-b"
            >
              CS50 Web
            </a>
          </div>
          <div className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500">
            <h3 className="text-3xl font-bold mb-[50px]">CodeCombat</h3>
            <p className="text-xl flex items-center">
              Learned: <SiPython />
            </p>
            <p className="text-xl">CodeCombat is probably the most fun I had learning coding.</p>
            <a
              href="https://codecombat.com"
              className="font-bold text-b"
            >
              Their Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
