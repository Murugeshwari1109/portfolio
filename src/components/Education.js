import React from 'react'

const Education = () => {
  return (
    <section className="py-8" id="education">
        <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="mt-12 lg:ml-12 ml-4 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
            <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold lg:ml-[-6%] ml-[-17%]"><span>2021 - 2025</span></h3>
            <p>
                <span> Bachelors degree in Information Technology</span>
                <br />
                <span>National Engineering College</span>
                <br /> 
                <span>current CGPA of 9.1.</span> 
            </p>
            </div>
            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold lg:ml-[-6%] ml-[-17%]"><span>2020 - 2021</span></h3>
            <p>
                <span>Higher Secondry School (HSC) </span>
                 <br />
                 <span>RC Susai Higher Secondary School</span>
                <br />
                <span>pass percentage of 96.</span>
            </p>
            </div>
            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold lg:ml-[-6%] ml-[-17%]"><span>2018 - 2019</span></h3>
            <p>
                <span>Secondary School Leaving Certificate (SSLC)</span>
                 <br />
                 <span>Vimal Matric Higher Secondary School</span>
                <br />
                <span>pass percentage of 97.</span>
            </p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Education