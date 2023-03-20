import React from 'react'
import "../Style/Accesori-card.css";
const AccesoriCard = ({name,img, price, key}) => {
  return (
    <div className='product-card flex'>
       <img src={img} alt="" />
       <p>{name}</p>
       <span>{price}</span>
    </div>
  )
}

export default AccesoriCard