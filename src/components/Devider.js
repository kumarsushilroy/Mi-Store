import React from 'react';
import '../Style/Devider.css';


const Devider = ({text}) => {
  return (
    <div className='dvdr'>
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Devider