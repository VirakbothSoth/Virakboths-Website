import React from 'react';
import face from '../assets/images/virakboth.jpg';
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="p-40">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={face}
              alt="Virakboth's Face"
              className="h-[400px] rounded-full border-4 border-gray-200 shadow-lg object-cover"
            />
          </div>
          <div>
            <h1 className="inline-block font-bold">
              Hello, I'm Virakboth
            </h1>
            <h1 className="inline-block font-bold animate-blink">
              _
            </h1>
          </div>
          <p>
            A passionate cambodian developer that studied coding since 2022
          </p>
          <p
            id="ScrollDown"
          >
            <FaArrowDown />Scroll Down<FaArrowDown />
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s steps(2, start) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
