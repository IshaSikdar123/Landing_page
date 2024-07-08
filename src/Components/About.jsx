import React from 'react';
import './About.css';
import gloww1 from './gloww1.png';

const About = () => {
  return (
    <div className='cont'>
      <p className='text'>WHY US??</p>
      <p className='text1'> At DataSense , we fuel ambition, transforming everyday individuals into data superheroes primed to conquer their dream careers in analytics and business intelligence. With a proven track record of propelling over 100,000 students into the stratosphere of data success, we're not just pioneers,we're trailblazers igniting the future of data excellence. </p>
      <button className='btnnn' onClick={About}>Discover</button>
    <img src={gloww1} alt="" className='glowis' />
    </div>
  );
};

export default About