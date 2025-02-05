import React from 'react'
import Image1 from "../../assets/women/women.png"
import Image2 from "../../assets/women/women2.jpg"
import Image3 from "../../assets/women/women3.jpg"
import Image4 from "../../assets/women/women4.jpg"
import { FaStar } from 'react-icons/fa6'

const ProductData = [
    {
        id: 1,
        img: Image1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        img: Image2,
        title: "Women Ethnic",
        rating: 4.1,
        color: "Red",
        aosDelay: "200"
    },
    {
        id: 3,
        img: Image3,
        title: "Women western",
        rating: 4.2,
        color: "Brown",
        aosDelay: "400"
    },
    {
        id: 4,
        img: Image4,
        title: "Goggles",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600"
    },
    {
        id: 5,
        img: Image2,
        title: "New Design",
        rating: 4.7,
        color: "Pink",
        aosDelay: "800"
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos = "fade-up" className='text-sm text-[#4263eb]'>
                Top Selling Product for you!
            </p>
            <h1 className='text-3xl font-bold' data-aos = "fade-up">
                Products
            </h1>
            <p className='text-sm text-gray-400' data-aos = "fade-up">
            Discover our most popular products, handpicked for quality and style. 
            Whether you're looking for the latest trends or timeless classics, we've got something for everyone!
            </p>
        </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductData.map((data) => (
                        <div className='space-y-3' data-aos = "fade-up" data-aos-delay = {data.aosDelay} key={data.id}> 
                            <img src={data.img} alt="Product Image"  className='h-[220px] w-[150px] object-cover rounded-md'/>

                            <div>
                                <h3 className='font-semibold'> {data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-white bg-[#4263eb] py-1 px-4 cursor-pointer mt-10 rounded-md'>View All Button</button>
                </div>
            </div>
        </div>
  )
}

export default Products