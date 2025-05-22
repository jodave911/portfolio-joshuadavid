import BackGround from './Background';
import './App.css'
import React from 'react';
import dp from './your-photo.png';


const Home = () => {
  return (
    <>
      <BackGround />

      {/* Hero Section*/}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16"> 

        <div className="max-w-7xl w-full flex flex-col items-center justify-between gap-12">
          
       
          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl text-white italic font-playfair">
              Hey, I’m
            </h1>

            <h1 className="text-5xl md:text-8xl font-playfair text-secon mt-2  leading-[.85]">
              Joshua David
            </h1>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-900 transition"
              >
                View My Work
              </a>
              <a
                href="/Joshua_Resume.pdf" 
                className="bg-secon text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-900 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
