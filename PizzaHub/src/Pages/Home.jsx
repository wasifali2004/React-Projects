import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import banner from "../assets/delicious-pizza-studio.jpg"
import "../css/Home.css"
import Footer from './Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <div className="home" style={{backgroundImage: `URL(${banner})`}}>
        <div className="headerContainer" >
            <h1>Pedro's Pizzeria</h1>
            <p>"PIZZA TO FIT ANY TASTE"</p>
            <Link to="/menu">
            <button className='btn'>ORDER NOW</button>
            </Link>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Home