import React from 'react';

const About = () => {
  return (
    <section className="py-80">
      <div className="container mx-auto">
        <div className="my-5">
          <h2 className="font-bold mb-6">About Me</h2>
          <p>
            I'm a web developer with a passion for creating beautiful and responsive websites.
            My focus is on delivering clean, functional, and user-friendly designs.
          </p>
        </div>
        <div className="my-5">
          <h3 className="font-bold mb-6">Hobbies</h3>
          <ul className="text-lg list-disc list-inside leading-relaxed text-gray-700 inline-block ">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4 text-black">•</span>
              <span>Learning Chinese 🗣️</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4 text-black">•</span>
              <span>Socializing with Friends 👥</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-4 h-4 text-black">•</span>
              <span>Coding (of course) 🧑‍💻</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
