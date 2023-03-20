import React from 'react'
import { Link } from 'react-router-dom';
import AccesoriCard from './AccesoriCard';
import '../Style/accsSection.css';


function Hotacesories({ music, musicCover, smartDevices, smartDevicesCover, Home, HomeCover, Lifestyle, LifestyleCover, MobileItems, MobileItemsCover }) {

    return (

        <div className="accsSection mt-5">
            <div className='mx-auto'>
                <Link to={'/'} ><button className='rounded border px-4 py-2 mx-auto my-4 bg-cyan-600 text-white'>↩Back</button></Link>
                <img src={musicCover || smartDevicesCover || LifestyleCover || MobileItemsCover || HomeCover} alt="" />
            </div>

            {/* 2nd SECTION-------------------------------------------------------------  */}

            <div>

                {


                    music && music.map((item, index) => {
                        return (


                            <AccesoriCard name={item.name} price={item.price} img={item.image} key={index} />


                        )

                    })


                }


                {
                    smartDevices && smartDevices.map((item, index) => {
                        return (

                            <AccesoriCard name={item.name} price={item.price} img={item.image} key={index} />
                        )

                    })
                }

                {
                    Home && Home.map((item, index) => {
                        return (

                            <AccesoriCard name={item.name} price={item.price} img={item.image} key={index} />
                        )

                    })
                }

                {
                    Lifestyle && Lifestyle.map((item, index) => {
                        return (

                            <AccesoriCard name={item.name} price={item.price} img={item.image} key={index} />
                        )

                    })
                }

                {
                    MobileItems && MobileItems.map((item, index) => {
                        return (

                            <AccesoriCard name={item.name} price={item.price} img={item.image} key={index} />
                        )

                    })
                }

                <AccesoriCard />
            </div>

        </div>




    )

}

export default Hotacesories