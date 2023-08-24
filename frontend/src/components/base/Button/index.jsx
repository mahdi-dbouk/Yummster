import React from 'react';
import './Button.css';

const Button = ({text,icon, style, action}) => {
  return (
    <div>
        <button className={`${style}`} onClick={action}>
            {icon}{text}
        </button>
    </div>
  )
}

export default Button;