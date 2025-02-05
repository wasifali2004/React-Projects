import React from 'react'
import BannerImg from "../../assets/4547829.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'    
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos = "zoom-in">
                    <img src={BannerImg} alt="Banner Image"  className='max-w-[400px] h-[350px] w-full mx-auto object-cover'/>
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos = "fade-up"  className='text-3xl sm:text-4xl font-bold'>Winter Sale Upto 50% Off</h1>
                    <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                    Don't miss out on our biggest winter sale! Enjoy up to 50% off on a wide range of products. 
                    From cozy winter wear to must-have accessories, grab your favorites at unbeatable prices.
                    Hurry, limited stock available!
                    </p>

                    <div className='flex flex-col gap-4 '>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure className='text-4xl h-12 w-12 shdow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                            <p>Quality Product</p>
                        </div>

                        <div data-aos = "fade-up" className='flex items-center gap-4'> 
                            <IoFastFood data-aos = "fade-up" className='flex items-center h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Fast Delivery</p>
                        </div>

                        <div data-aos = "fade-up" className='flex items-center gap-4'> 
                            <GiFoodTruck data-aos = "fade-up" className='flex items-center h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Easy Payment Methods </p>
                        </div>

                        <div data-aos = "fade-up" className='flex items-center gap-4'> 
                            <GiFoodTruck data-aos = "fade-up" className='flex items-center h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            <p>Fast Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner