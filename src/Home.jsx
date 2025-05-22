import BackGround from './Background';
import React from 'react';
import dp from './assets/Joshua-Photos-Assests/joshua-cutout-circle.png';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      

      {/* Hero Section*/}
      <section className=" flex items-center justify-center p-28"> 

        <div className="max-w-7xl w-full flex flex-col items-center justify-between gap-12">
          
          <div className="mb-0">
            <img
              src={dp}// Replace with your actual file in /public
              alt="Joshua David"
              className="h-[15rem] object-cover rounded-xl drop-shadow-2xl"
            />
          </div>
       
          {/* Text Content */}
          <div className="text-center -mt-14 drop-shadow-2xl">
            <h1 className="text-5xl md:text-8xl text-white italic font-playfair">
              Hey, I’m
            </h1>

            <h1 className="text-5xl md:text-8xl font-playfair text-secon mt-2  leading-[.85]">
              Joshua David
            </h1>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="#projects"
                className="  drop-shadow-2xl bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-900 transition"
              >
                View My Work
              </a>
              <a
                href="/Joshua_Resume.pdf" 
                className=" drop-shadow-2xl bg-secon text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-900 transition"
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
