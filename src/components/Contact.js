import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Message: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="" id='contact'>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="contact py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-10 text-white"
        >
          Contact Me
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8 text-gray-300"
        >
          Feel free to contact me via email or social media!
        </motion.p>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center block mb-10 space-y-2 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
        >
            <ul>
          <li className="text-gray-300">Phone: +91 9344642502</li>
          <li className="text-gray-300">Email: murugeshwarimurugan119@gmail.com</li>
          </ul>
        </motion.ul>
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center mb-10 space-x-4"
        >
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 mx-2 sm:mx-4"
          >
            <a href="https://github.com/Murugeshwari1109" target="_blank" rel="noopener noreferrer">
              <FiGithub className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-500 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 mx-2 sm:mx-4"
          >
            <a href="http://www.linkedin.com/in/murugeshwari-m" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-500 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 mx-2 sm:mx-4"
          >
            <a href="https://leetcode.com/u/murugeshwarimurugan119/" target="_blank" rel="noopener noreferrer">
              <FiCode className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-500 transition-transform duration-300" />
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-300 mx-2 sm:mx-4"
          >
            <a href="https://www.instagram.com/cholo_idiot" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl sm:text-4xl text-gray-300 hover:text-gray-500 transition-transform duration-300" />
            </a>
          </motion.li>
        </motion.ul>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-300"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message:</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-600 rounded resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-300"
                rows="4"
                placeholder="Enter your message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform duration-300 w-full"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
    </div>
  );
}

export default Contact;
