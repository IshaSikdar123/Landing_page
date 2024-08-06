import React, { useEffect, useState } from 'react';
import './Dash.css';
import sql from './sql.mp4';
import Spline from '@splinetool/react-spline';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';




const jobTitles = ['DataAnalyst', 'DataEngineer', 'DataScientist'];

const Dash = () => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [currentTitle, setCurrentTitle] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentJobTitle = jobTitles[index];
      let updatedTitle; 

      if (isDeleting) {
        updatedTitle = currentJobTitle.substring(0, charIndex - 1);
      } else {
        updatedTitle = currentJobTitle.substring(0, charIndex + 1);
      }

      setCurrentTitle(updatedTitle);

      if (!isDeleting && updatedTitle === currentJobTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedTitle === '') {
        setIsDeleting(false);
        setIndex((index + 1) % jobTitles.length);
      }

      setCharIndex(prevCharIndex => (isDeleting ? prevCharIndex - 1 : prevCharIndex + 1));
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, index, isDeleting]);

  return (
    <div className="cont">
      <div className='absolute flex mr-16 md:2xl:mr-[60rem] lg:xl:mr-[35rem] mt-[20rem] md:2xl:mt-[50rem] lg:xl:mt-[40rem] '>
        <h1 className='z-10 text-5xl md:text-7xl -mt-[38rem]'>Elevate Your Career
          <span className='z-10 ml-0.5 text-5xl md:text-7xl mt-3'>as a
            <span className='z-10 ml-[7rem] md:ml-[9rem] text-5xl md:text-7xl  text-dash md:-mt-[4.5rem]'>{currentTitle}</span>
          </span> 
          <h1 className='z-10 ml-[9.5rem] md:ml-[14rem] text-5xl md:text-7xl mt-5 md:mt-4'>with DataSense</h1>
        </h1>
      </div>

      <div className='z-20 ml-1 text-2xl mt-5'>
        <p className='z-10 ml-[10rem] text-white text-3xl w-[68vw] font-medium mt-28'>
          "Empower yourself with cutting-edge skills,
          <span className='z-10 ml-1 text-3xl mt-0.5 font-medium '>network with industry experts</span>
          <span className='z-10 ml-1 text-3xl mt-0.5 font-medium '>and ignite your data career journey."
          </span>
        </p>
      </div>
      
      <div className="vid relative h-full w-full">
    <video src={sql} autoPlay loop muted className='h-full w-full object-cover opacity-25'></video>
    <Spline 
        scene="https://prod.spline.design/UeAq4OV1tdx6x0VL/scene.splinecode" 
        className='spline absolute top-0 right-48 z-50' 
    />
</div> 

<div className='absolute top-[50rem] md:top-[50rem] lg:top-[60rem] xl:top-[55rem] right-[10rem] md:right-[32rem] lg:mr-[56rem] '>
      <button className="relative z-[4000] top-[2rem] right-[10vw] -translate-x-1/2 w-[16rem] p-5 text-[#f30f0f] border border-white rounded-[21px] cursor-pointer font-sans font-semibold text-[15px] transition-colors duration-300 ease-in-out hover:bg-white/20">
        <span className="text-white flex items-center justify-center mt-1 left-5">Learn More</span>
      </button>

      <button className="relative top-[2rem] right-[4vw] -translate-x-1/2 w-[16rem] p-5 bg-gradient-to-r from-cyan-500 to-blue-500 border border-[#0c6074] rounded-[21px] text-white cursor-pointer font-sans font-normal text-[15px] transition-transform duration-[600ms] z-[4000] glow-button">
      <span className="text-white flex items-center justify-center mt-1 left-5">Get Started</span>
    </button>
      </div>
    </div>
  );
}; 

export default Dash;


//<div className="absolute top-[40rem] md:top-[50rem] lg:top-[60rem] xl:top-[55rem] right-24 md:right-[30rem] lg:mr-[72rem]">