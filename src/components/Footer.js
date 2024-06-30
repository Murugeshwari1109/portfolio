import React from 'react';
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto flex justify-between px-4 py-6">
        <div>
          <p className="text-gray-300 text-sm">Copyright @ 2023</p>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="w-5" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="w-5" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="w-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
