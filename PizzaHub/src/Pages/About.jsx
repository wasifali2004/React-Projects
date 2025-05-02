import React from 'react';
import "../css/About.css";
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="aboutTop">
          <div className="contentWrapper">
            <h1>About Us</h1>
            <p>
            At Pizza Hub, we are passionate about delivering innovative solutions that meet your needs. With a focus on quality and customer satisfaction, our team specializes in Food, offering services designed to help you succeed. We believe in collaboration and work closely with our clients to bring their ideas to life. Thank you for choosing Pizza Hub — we look forward to partnering with you!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
