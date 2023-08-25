import React from 'react'
import 'react-responsive-carousel';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../assets/images/f69362ee4d36-meal-planners-t.jpg.webp';
import image2 from '../../assets/images/pexels-elle-hughes-1660030.jpg';
import image3 from '../../assets/images/SEO-Food-Fresh-Groceries.png';
import image4 from '../../assets/images/paper-people-chain-green-grass-unity-concept_632805-35.avif'

const Landing = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <Carousel 
      showArrows={false} 
      showIndicators={false} 
      showThumbs={false}
      interval={5000}
      autoPlay
      
      infiniteLoop>

        <div className="relative w-full h-[calc(100%-56px)]">
          <div
            className="w-full h-[calc(100%-56px)] bg-cover bg-center"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-red-700 opacity-50">

          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-20">
            <h1 className="text-white text-7xl font-bold p-8">Discover Culinary Delights in an <span className='animate-pulse duration-100'><strong>Instant!</strong></span></h1>
            <h1 className='text-white font-bold bg-slate-900 bg-opacity-25 text-2xl w-3/5'>Find your culinary match instantly. Our powerful search engine effortlessly locates any meal you desire, from exotic delicacies to comforting favorites. Say goodbye to endless scrolling and hello to a world of delicious possibilities at your fingertips</h1>
          </div>
        </div>

        <div className="relative w-full h-[calc(100%-56px)]">
          <div
            className="w-full h-[calc(100%-56px)] bg-cover bg-center"
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-slate-700 opacity-50">

          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-20">
            <h1 className="text-white text-7xl font-bold p-8">Create and Share your<span><u> Own Recipes!</u></span></h1>
            <h1 className='text-white font-bold bg-slate-900 bg-opacity-25 text-2xl w-3/5'>Our platform empowers you to effortlessly create and customize your own mouthwatering recipes. From secret family recipes to innovative creations, inspire others and be part of a vibrant community that celebrates the joy of cooking and sharing.</h1>
          </div>
        </div>

        <div className="relative w-full h-[calc(100%-56px)]">
          <div
            className="w-full h-[calc(100%-56px)] bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-50">

          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-20">
            <h1 className="text-white text-7xl font-bold p-8">Streamline Your Culinary Journey: Embrace Effortless Meal Planning with Our <span><strong>Smart Meal Planners</strong></span></h1>
            <h1 className='text-white font-bold bg-slate-900 bg-opacity-25 text-2xl w-3/5'>Say goodbye to the stress of deciding what to cook each day and let our smart system do the work for you. Enjoy personalized meal suggestions, streamline your grocery shopping, and experience the joy of stress-free meal preparation.</h1>
          </div>
        </div>

        <div className="relative w-full h-[calc(100%-56px)]">
          <div
            className="w-full h-[calc(100%-56px)] bg-cover bg-center"
            style={{ backgroundImage: `url(${image4})` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-50">

          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start gap-20">
            <h1 className="text-white text-7xl font-bold p-8">An Amazing Community of <span><strong>Food Lovers!</strong></span></h1>
            <h1 className='text-white font-bold bg-slate-900 bg-opacity-25 text-2xl w-3/5'>From seasoned chefs to aspiring home cooks, our community fosters a welcoming environment where food becomes a shared language that brings us all closer.</h1>
          </div>
        </div>
        <img src={image1} alt="" />
      </Carousel>
    </div>
  )
}

export default Landing;