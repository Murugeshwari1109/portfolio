import React from 'react';
import Project1 from "../assets/event.jpg";
import Project2 from "../assets/email.jpg";
import Project3 from "../assets/employee.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col gap-16 mt-11">
          {/* Project 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <img src={Project1} alt="" className="w-full sm:w-3/5 h-auto hover:scale-105 transition-transform duration-300" />
            <div className="flex-1 text-left sm:text-right">
              <h3 className="text-2xl font-semibold mt-8 sm:mt-0">
                Event Organizing Portal
              </h3>
              <p className="text-gray-400 text-sm mt-2 text-justify">
                A comprehensive platform designed to simplify the planning and management of various events developed using HTML, CSS, JS, Java Servlet, and MYSQL.
              </p>
              <div className="flex mt-12 gap-2 justify-end sm:justify-start">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Live preview
                </button>
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
            <img src={Project2} alt="" className="w-full sm:w-3/5 h-auto hover:scale-105 transition-transform duration-300" />
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold mt-8 sm:mt-0">
                Email Campaign
              </h3>
              <p className="text-gray-400 text-sm mt-2 text-justify">
                An Oracle APEX based project. Providing a tool for creating, executing, and analyzing email marketing campaigns. Includes template design, audience segmentation, and performance tracking.
              </p>
              <div className="flex mt-12 gap-2 justify-start">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Live preview
                </button>
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <img src={Project3} alt="" className="w-full sm:w-3/5 h-auto hover:scale-105 transition-transform duration-300" />
            <div className="flex-1 text-left sm:text-right">
              <h3 className="text-2xl font-semibold mt-8 sm:mt-0">
                Employee Turnover Cost Calculator
              </h3>
              <p className="text-gray-400 text-sm mt-2 text-justify">
                A tool to calculate the financial impact of employee turnover. Inputs include recruitment costs, training expenses, and lost productivity. Developed using React JS, Tailwind CSS, and PouchDB.
              </p>
              <div className="flex mt-12 gap-2 justify-end sm:justify-start">
                <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Live preview
                </button>
                <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                  Checkout github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
