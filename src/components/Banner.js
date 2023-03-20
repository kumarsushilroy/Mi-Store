import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner({ BannerEnd }) {

   


    return (
        <div className='bannerEnd'>


            < Carousel interval={2000}>
                {
                    BannerEnd.map((item, i) => {
                        return (

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.source}</p>
                                </Carousel.Caption>
                            </Carousel.Item>


                        )
                    })


                }
            </Carousel>

           


        </div >
    )
}

export default Banner;