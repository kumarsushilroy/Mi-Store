import React from 'react';
import data from '../data/data.json';
import Slider from '../components/Slider'


import Offers from '../components/Offers';
import Devider from './Devider';
import Starproduct from './Starproduct';
import HotacceriesMenu from '../components/HotacceriesMenu';
import Productreview from '../components/Productreview';
import Videos from '../components/Videos';
import Banner from '../components/Banner'


const Dashboard = () => {
  return (
    <div>
      <Slider start={data.banner.start} />
            <Offers offr={data.offer} />
            <Devider text="STAR PRODUCTS" />
            <Starproduct product={data.starProduct} />
            <Devider text={'HOT ACCESSORIES'} />
            <HotacceriesMenu />

            <Devider text="PRODUCT REVIEWS" />

            <Productreview prdctreview={data.productReviews} />

            <Devider text="VIDEOS" />

            <Videos Vidos={data.videos} />

            <Devider text="PRESS" />
            <Banner BannerEnd={data.banner.end} />
    </div>
  )
}

export default Dashboard