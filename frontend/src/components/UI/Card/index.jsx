import React from 'react';
import image from '../../../assets/images/Shakshuka-19.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Card = ({name, cuisine, likesCount, commentsCount, rating, image}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/recipe', {replace:true});
  }
  return (
    <div 
      className='h-72 w-56 flex flex-col gap-3 bg-slate-50 shadow-md rounded-md hover:bg-slate-100 hover:cursor-pointer border hover:shadow-lg hover:-translate-y-1 duration-300'
      onClick={handleOnClick}
    >
      <div className='w-full h-32 bg-slate-800 rounded-md overflow-clip'>
          <img
          className='rounded-t-md object-cover hover:scale-110 duration-300' 
          src={image} 
          alt="Shakshuka"
           />

      </div>

      <div className='font-bold text-slate-950 w-full flex flex-row justify-center'>
          {name}
      </div>

      <div className='font-semibold text-slate-950 w-full text-sm flex flex-row justify-center'>
          {cuisine}
      </div>

      <div className=' flex flex-row justify-center gap-2'>
        <div className='h-7 w-auto p-2 rounded-2xl bg-red-600 flex flex-row justify-center items-center gap-1'>
          <FontAwesomeIcon icon={faHeart} size='1x' color='white' /> 
          <span className='text-white'>{likesCount}</span>
        </div>
        <div className='h-7 w-auto rounded-2xl p-2 bg-cyan-700 flex flex-row justify-center items-center gap-1'>
          <FontAwesomeIcon icon={faComment} size='1x' color='white' /> 
          <span className='text-white'>{commentsCount}</span>
        </div>

      </div>

      <div className='flex flex-row justify-center items-center gap-2'>

        {
          [1,2,3,4,5].map((val) => (
            (val <= rating)? <FontAwesomeIcon icon={faStar} color='orange' size='1x' />
             : <FontAwesomeIcon icon={faStar} color='lightgray' size='1x' />
          ))
        } 
      </div>

    </div>
  )
}

export default Card;