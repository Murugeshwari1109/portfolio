import React from 'react';

const Header = ({ scrolling }) => {
  return (
    <header
      className={`${scrolling ? 'border-b border-gray-900' : ''} fixed left-0 right-0 top-0 z-20`}
      id="home"
    >
      <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
        <div>
          <div>
            <h1
              className="font-bold text-2xl gradient-text">          
              My Portfolio
            </h1> 
          </div>

        </div>

          <div>
            <ul className="flex gap-4">
            <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  Home
                </a>
              </li>

              <li>
                <a href="#education" className="text-gray-400 hover:text-white cursor-pointer">
                  Education
                </a>
              </li>
            <li>
                <a href="#skills" className="text-gray-400 hover:text-white cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
              
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
