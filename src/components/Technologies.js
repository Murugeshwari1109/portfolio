import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiFigma, SiAngular, SiReact, SiReactos } from 'react-icons/si';

const Technologies = () => {
  return (
    <section className="py-10" id="technologies">
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <div className="mt-14">
          <div>
            <div className="flex justify-between items-center">
              <SiHtml5 className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiCss3 className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiJavascript className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiFigma className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiAngular className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiReact className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <SiReactos className="text-4xl" />
              <p className="text-gray-500">Advanced</p>
            </div>
            <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
