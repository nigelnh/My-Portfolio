import React from 'react';

const About = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          I'm a web developer with 5 years of experience specializing in React and modern frontend technologies. My passion lies in creating intuitive and performant user interfaces that provide exceptional user experiences.
        </p>
        <p className="text-gray-700 mb-4">
          Throughout my career, I've worked on a variety of projects ranging from e-commerce platforms to complex data visualization tools. I'm always eager to learn new technologies and stay up-to-date with the latest industry trends.
        </p>
        <p className="text-gray-700">
          When I'm not coding, you can find me exploring nature trails, reading tech blogs, or experimenting with new recipes in the kitchen.
        </p>
      </div>
    </section>
  );
};

export default About;