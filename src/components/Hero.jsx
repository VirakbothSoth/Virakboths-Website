import React from 'react';
import face from '../assets/images/virakboth.jpg';
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="text-black p-40">
        <div>
          <div className="flex items-center justify-center animate-bounce">
            <img
            src={face}
            alt="Virakboth's Face"
            className="h-[400px] rounded-full border-4 border-gray-200 shadow-lg object-cover"
            />
          </div>
          <div>
            <h1 className="inline-block font-bold">
              Hello, I'm
            </h1>
            <h1 className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 m-[20px]">
              Virakboth
            </h1>
          </div>
          <p>
            A passionate cambodian Front-End Developer that studied web development since 2023
          </p>
          <p
            id="ScrollDown"
          >
            Scroll Down <FaArrowDown /><FaArrowDown />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
