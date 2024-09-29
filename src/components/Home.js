import React from 'react';

const Home = () => {
  return (
    <section className="text-center">
      <img
        src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Your Name"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">Nhan Nguyen</h1>
      <p className="text-xl text-gray-600 mb-4">Junior @ Gettysburg College & Software Engineer Intern</p>
      <p className="max-w-2xl mx-auto text-gray-700">
        Welcome to my portfolio! I'm passionate about creating beautiful and functional software experiences. With experience in different frameworks and modern technologies, I bring ideas to life through my projects as well as my contribution to team's project.
      </p>
    </section>
  );
};

export default Home;