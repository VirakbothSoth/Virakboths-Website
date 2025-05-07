import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 80 },
    { name: 'Java', level: 10 },
    { name: 'C', level: 20 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 60 },
    { name: 'Tailwind CSS', level: 70 },
    { name: 'Django', level: 50 },
  ];

  // Function to get color based on skill name
  const getColor = (skillName) => {
    switch (skillName.toLowerCase()) {
      case 'html':
        return 'bg-red-400';
      case 'python':
        return 'bg-blue-400';
      case 'java':
        return 'bg-yellow-400';
      case 'javascript':
        return 'bg-green-400';
      case 'c':
        return 'bg-cyan-400';
      case 'css':
        return 'bg-blue-400';
      case 'react':
        return 'bg-cyan-400';
      case 'tailwind css':
        return 'bg-teal-400';
      case 'django':
        return 'bg-orange-400';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center font-bold mb-6">Skills</h2>
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:shadow-xl hover:p-5 duration-500"
              >
                <h3 className="font-semibold text-3xl mb-2">{skill.name}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div className="text-l font-medium">{skill.name}</div>
                    <div className="text-l font-medium">{skill.level}%</div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="bg-bg rounded-full h-2.5 w-full">
                      <div
                        className={`${getColor(skill.name)} h-2.5 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
