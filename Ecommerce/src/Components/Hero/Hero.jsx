import React from 'react'
import Image1 from "../../assets/hero/sale.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/women.png"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% Off",
        description: "Enjoy massive savings with up to 50% off on our best-selling products. Shop now and grab your favorite items before the sale ends!"
    },
    {
        id: 2,
        img: Image2,
        title: "Get 30% Discount on Shopping.",
        description: "Limited-time offer! Get 30% off on your entire purchase. Upgrade your wardrobe or grab the latest gadgets at unbeatable prices!"
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 40% on Women's Wear",
        description: "Refresh your style with up to 40% off on women's fashion. From trendy dresses to elegant accessories, find everything at a discounted price!"
    }
];

const Hero = ({HandlePopup}) => {
    var setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false, 
        pauseOnFocus: true
    };
  return (
    <div className='relative flex justify-center min-h-[550px] overflow-hidden sm:min-h-[650px] bg-gray-100 dark:bg-slate-950 items-center dark:text-white duration-300'>
        <div className='h-[700px] w-[700px] bg-[#4263eb]/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'> </div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...setting}>
                    {ImgList.map((data) => {
                        return ( <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 data-aos = "zoom-out" data-aos-duration="500" data-aos-once= "true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p data-aos = "zoom-out" data-aos-duration = "500" data-aos-delay = "100"> {data.description}</p>
                                    <div data-aos = "fade-up" data-aos-duration = "500" data-aos-delay = "300">
                                        <button onClick={HandlePopup} className='bg-gradient-to-r from-[#4263eb] to-[#63e6be] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'> Order Now</button>
                                    </div>
                                </div>
                                <div className='order-1 sm:order-2'>
                                    <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                                        <img src={data.img} alt="Slider image"  className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </Slider>
            </div>
    </div>

  )
}

export default Hero