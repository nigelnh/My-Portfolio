import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Nhan X Nguyen. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/nigelnh" className="hover:text-gray-300 transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/nhan-nguyen-374543248" className="hover:text-gray-300 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100052272098134" className="hover:text-gray-300 transition duration-300">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;