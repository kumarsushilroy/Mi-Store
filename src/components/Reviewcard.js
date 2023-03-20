import React from 'react';
import '../Style/reviewcard.css'

function Reviewcard({img, review, name, price, key}) {
  return (
    <div className='reviewcard'>
      
      <img src={img} alt={`${key} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
        
        
    </div>
  )
}

export default Reviewcard