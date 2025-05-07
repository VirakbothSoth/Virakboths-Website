import React from 'react';
import { SiFacebook, SiLinkedin, SiGithub, SiLeetcode, SiHackerrank, SiCodewars, SiTelegram, SiFreecodecamp } from "react-icons/si";

const Contact = () => {
  return (
    <section className="py-80 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Find Me!</h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/VirakbothSoth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <SiGithub className="w-10 h-10" />
          </a>
          <a
            href="https://facebook.com/VirakbothSothSam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <SiFacebook className="w-10 h-10" />
          </a>
          <a
            href="https://t.me/VirakbothSoth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <SiTelegram className="w-10 h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/virakboth-soth-b1b2b8306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-700 transition-colors"
          >
            <SiLinkedin className="w-10 h-10" />
          </a>
          <a
            href="https://leetcode.com/u/VirakbothSoth/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <SiLeetcode className="w-10 h-10" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/virakbothsoth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <SiHackerrank className="w-10 h-10" />
          </a>
          <a
            href="https://www.codewars.com/users/VirakbothSoth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-400 transition-colors"
          >
            <SiCodewars className="w-10 h-10" />
          </a>
          <a
            href="https://https://www.freecodecamp.org/virakboth_soth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <SiFreecodecamp className="w-10 h-10" />
          </a>
        </div>
        <p className="mt-8">
          My Email: <span className="text-blue-600 font-bold">virakbothsoth@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
