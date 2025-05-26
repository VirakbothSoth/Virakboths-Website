import React from 'react';
import { FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-80">
      <div className="container mx-auto">
        <div className="my-5">
          <h2 className="section-title"><FaBook />About Me</h2>
          <p>
            I'm a developer from Cambodia that can make websites & simple programs.
          </p>
        </div>
        <div className="my-5">
          <h3 className="font-bold mb-6">Hobbies</h3>
          <ul className="text-lg list-disc list-inside leading-relaxed inline-block ">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4">•</span>
              <span>Learning Chinese 🗣️</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4">•</span>
              <span>Socializing with Friends 👥</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4">•</span>
              <span>Coding (of course) 🧑‍💻</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
