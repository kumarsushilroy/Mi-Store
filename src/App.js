
import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Devider from './components/Devider';
import Starproduct from './components/Starproduct';
import HotacceriesMenu from './components/HotacceriesMenu';
import Hotacesories from './components/Hotacesories';
import Productreview from './components/Productreview';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Miphones from './components/Miphones';
import Dashboard from './components/Dashboard';
import Redmiphone from './components/Redmiphone';
import Tv from './components/Tv';
import Laptop from './components/Laptop';
import Radio from './components/Radio';
import NavAcces from './components/NavAcces';

// import Offer from './components/Offer'



function App() {

  const info = data.banner.start;
  // const result = info.start;
  console.log(`${info} is getting now`)

  return (

    <div className='container-fluid'>
      <div className="row">
        <div className="col-lg-12">


          <Router>

            <Prenavbar />
            <Navbar />
            


            <Routes>

              <Route path='/' element={<Dashboard/>}/>

              <Route exact path='/music'
                element={<Hotacesories music={data.hotAccessories.music}
                  musicCover={data.hotAccessoriesCover.music} />}
              />

              <Route exact path='/smartDevices'
                element={<Hotacesories smartDevices={data.hotAccessories.smartDevice}
                  smartDevicesCover={data.hotAccessoriesCover.smartDevice} />}
              />

              <Route exact path='/Home'
                element={<Hotacesories Home={data.hotAccessories.home}
                  HomeCover={data.hotAccessoriesCover.home} />}
              />

              <Route exact path='/lifestyle'
                element={<Hotacesories Lifestyle={data.hotAccessories.lifeStyle}
                  LifestyleCover={data.hotAccessoriesCover.lifeStyle} />}
              />

              <Route exact path='/mobileAccessories'
                element={<Hotacesories MobileItems={data.hotAccessories.mobileAccessories}
                  MobileItemsCover={data.hotAccessoriesCover.mobileAccessories} />}
              />


              <Route exact path='/miphone' element={<Miphones/>}/>
              <Route exact path='/redmiphones' element={<Redmiphone/>}/>
              <Route exact path='/tv' element={<Tv/>}/>
              <Route exact path='/laptops' element={<Laptop/>}/>
              <Route exact path='/audio' element={<Radio/>}/>
              <Route exact path='/navacces' element={<NavAcces/>}/>

            </Routes>

            





          </Router>

        </div>
      </div>





    </div>

  )
}

export default App;
