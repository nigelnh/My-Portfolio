import React from "react";

const About = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          I'm a software engineer student with 2 years of experience
          specializing in many modern frameworks and technologies. My passion
          lies in creating intuitive and performant user interfaces that provide
          exceptional user experiences.
        </p>
        <p className="text-gray-700 mb-4">
          Throughout my career, I've worked on a variety of companies and
          projects ranging from e-commerce platforms in a big tech company to
          application developments in startups. I'm always eager to learn new
          technologies and stay up-to-date with the latest industry trends.
        </p>
        <p className="text-gray-700">
          When I'm not coding, you can find me exploring nature trails, reading
          tech vlogs, or experimenting with new recipes (mostly italian food) in
          the kitchen.
        </p>
      </div>
    </section>
  );
};

export default About;
