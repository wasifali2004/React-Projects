import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'
import "../css/Contact.css"
import pic from "../assets/pic2.jpg"

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${pic})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form action="" id='contact' method='POST'>
            <label htmlFor="name"></label>
            <input type="text" name="name" placeholder='Enter your name' />
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder='Enter your email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" rows='6' placeholder='Enter message' required></textarea>
            <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact