import React from 'react'
import ProfilePic from "../assets/profile.png";

const Profile = () => {
  return (
        <section>
            <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                    <div>
                        <h2 className="font-bold text-4xl text-gray-300">Hello, This is Murugeshwari</h2>
                        <div>
                            <h2 className="font-bold text-4xl mt-1 gradiant-text">Frontend developer</h2>
                        </div>
                        <div>
                            <p className="mt-4 text-gray-400">
                            Enthusiastic B.Tech student with a strong background in Web development and database management systems. 
                            Passionate about creating efficient and scalable software solutions.
                            </p>
                            <a
                                href="/resume.pdf"
                                className="px-8 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 mt-5 inline-block"
                                style={{ backgroundImage: 'linear-gradient(to left bottom, #b02985, #7263c5, #0089d8, #00a1c1, #2fb09c)' }}
                                download
                                >
                                Resume
                            </a>
                        
                        </div>
                    </div>
                    <div className="relative">
                        <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10 overflow-hidden">
                            <div className="flex justify-center items-center h-full">
                            <div className="rounded-full overflow-hidden bg-white shadow-lg transform transition-transform duration-500 hover:-translate-x-4"
                                style={{ width: '280px', height: '280px' }}>
                                <img
                                src={ProfilePic}
                                alt=""
                                className="rounded-full"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Profile