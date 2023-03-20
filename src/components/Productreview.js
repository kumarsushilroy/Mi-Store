import React from 'react';
import Reviewcard from './Reviewcard';
import '../Style/reviewsection.css'

function Productreview({prdctreview}) {
  return (
    <div className='review'>
       {
       prdctreview.map((item, index)=>{
        return(
           <Reviewcard img={item.image} review={item.review} name={item.name} price={item.price} key={index} />
          
        )
       }) 
       }
    </div>
  )
}

export default Productreview