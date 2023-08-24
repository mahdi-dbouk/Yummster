import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Tab = ({text, path, isActive, setIsActive, isTargeted, setIsTargeted}) => {
    let activeStateDiv = 'bg-rose-400';
    let activeStateSpan = 'text-white';
    const navigate = useNavigate();

    const handleOnClick = () => {
        setIsTargeted(text);
        setIsActive(true);
        navigate(path, {replace:true});
    }


  return (
    <>
    {isActive && isTargeted===text?
    
    <div className={`h-8 w-full flex flex-row justify-center items-center cursor-pointer hover:bg-slate-200 ${activeStateDiv}`} onClick={handleOnClick}>
        <span className={`text-slate-950 font-semibold text-lg ${activeStateSpan}`}>
            {text}
        </span>
    </div>
    :
    <div className={`h-8 w-full flex flex-row justify-center items-center cursor-pointer hover:bg-slate-200`} onClick={handleOnClick}>
        <span className={`text-slate-950 font-semibold text-lg`}>
            {text}
        </span>
    </div>

    }
    </>
  )
}

export default Tab