import React from 'react';
import './Later.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import robot from './robot.png';
import job from './job.png';
import resume from './resume.png';
import mock from './mock.png';



const texts = [
  { title: 'Job', subtitle: 'Placement' , para:'Secure your dream job with tailored support, exclusive opportunities, and expert career guidance.', image: job, button: 'Coming Soon'},
  { title: 'Mock', subtitle: 'Interview' , para: "Sharpen your skills and boost your confidence with expert-led mock interviews and comprehensive feedback.", image: mock , button: 'Coming Soon' },
  { title: 'Resume', subtitle: 'Preparation', para: "Create standout resumes with personalized guidance, highlighting your skills and achievements effectively.", image: resume , button: 'Coming Soon'},
  { title: 'AI', subtitle: 'Doubtmate', image: robot },
  { title: 'Quizmaster', subtitle: 'Hub' },
  { title: 'Certify &', subtitle: 'Propel Hub' },
  { title: "Leaders's", subtitle: 'Summit' },
  { title: 'Credentials', subtitle: 'And Badges' },
];

const Later = () => {
  return (
    <div className='maining'>
       <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >

    <div>
      {texts.map((text, index) => (
        <div className='talks' key={index}>
             <SwiperSlide key={index}>
            <div className='dabbe'>
              <h1 className='ai'>
                {text.title}
                <span className='doubt'>{text.subtitle}</span>
                <span className='dou'>{text.para}</span>
              </h1>
              <img src={text.image} alt={text.title} className='image'/>
              <button className='soonn'>{text.button}</button>
            </div>
          </SwiperSlide>
        </div>
      ))}
      
    </div>
  </Swiper>
    </div>
  )
}

export default Later