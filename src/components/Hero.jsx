import face from '../assets/images/virakboth.jpg';
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="p-40">
        <div>
          <div className="flex items-center justify-center">
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-full border-4 border-[#272b3b] animate-ping"></span>
              <img
                src={face}
                alt="Virakboth's Face"
                className="relative h-[400px] rounded-full border-4 border-[#272b3b] shadow-lg object-cover"
                style={{ zIndex: 1 }}
              />
            </span>
          </div>
          <div>
            <h1 className="inline-block font-bold">
              Hi, I'm Virakboth
            </h1>
            <h1 className="inline-block font-bold animate-blink">
              _
            </h1>
          </div>
          <p>
            A Passionate Cambodian Developer and Student
          </p>
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 0.5s steps(1, start) infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
