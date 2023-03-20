import React from 'react';

function Bannercard({ name, desc, source, image, index }) {

    return (
        <div className='bannercrd'>

            {/* <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`${index}`}
                    />
                    <Carousel.Caption>
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        <p>{source}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel> */}
        </div>
    )
}

export default Bannercard;