import React from 'react'
import '../Style/products.css'
const Starproduct = ({product}) => {


  return (
    <div className='products' >
      <div> <a href={product[0].url}> <img src={product[0].image} alt="" /> </a> </div>

      <div>
      <a href={product[1].url}> <img src={product[1].image} alt="" /> </a>
      <a href={product[2].url}> <img src={product[2].image} alt="" /> </a>
      <a href={product[3].url}> <img src={product[3].image} alt="" /> </a>
      </div>
    </div>
  )
}

export default Starproduct