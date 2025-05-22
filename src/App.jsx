import BackGround from './Background';
import './App.css'
import React from 'react';
import dp from './your-photo.png';


const App = () => {
  return (
    <>
      <BackGround />

      {/* Hero Section*/}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-16"> 

        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Photo */}
          <div className="md:ml-auto">
            <img
              src={dp}// Replace with your actual file in /public
              alt="Joshua David"
              className="h-80 sm:h-[20rem] lg:h-[30rem] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left sm:mr-0 lg:mr-32">
            <h1 className="text-5xl md:text-8xl text-gray-800 italic font-playfair">
              Hey, I’m
            </h1>

            <h1 className="text-5xl md:text-8xl font-playfair text-blue-800 mt-2">
              Joshua David
            </h1>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                View My Work
              </a>
              <a
                href="/Joshua_Resume.pdf" 
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
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

export default App;
