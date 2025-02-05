import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Subcribe from './Components/Subscribe/Subcribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
  const [orderPopup, setorderPopup] = useState(false)
  
  const HandlePopup = () => {
    setorderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800, 
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div>
      <h1 className='bg-white dark:bg-gray-900 dark:text-white duration-200'></h1>
      <Navbar HandlePopup= {HandlePopup} />
      <Hero HandlePopup= {HandlePopup}/>
      <Products/>
      <TopProducts HandlePopup={HandlePopup} />
      <Banner/>
      <Subcribe/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
