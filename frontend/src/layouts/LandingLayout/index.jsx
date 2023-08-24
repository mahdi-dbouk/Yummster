import React from 'react'
import 'react-responsive-carousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/images/f69362ee4d36-meal-planners-t.jpg.webp';
import image2 from '../../assets/images/pexels-elle-hughes-1660030.jpg';

const Landing = () => {
  return (
    <div className='h-auto w-full overflow-hidden'>
      <Carousel 
      showArrows={false} 
      showIndicators={false} 
      showThumbs={false}
      interval={3000}
      autoPlay
      
      infiniteLoop>
        <img src={image1} className='w-full h-[calc(100%-100px)] object-cover' alt="" />
        <img src={image2} className='w-full h-[calc(100%-100px)] object-cover' alt="" />
        
      </Carousel>
    </div>
  )
}

export default Landing;