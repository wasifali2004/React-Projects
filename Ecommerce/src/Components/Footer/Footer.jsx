import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FaMapLocationDot, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile, FaTwitter } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';


const Footerlinks = [
    {
        title: "Home",
        link: "#"
    },
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Contact",
        link: "#contactus"
    },
    {
        title: "Blog",
        link: "#blog"
    }
]

const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
        <div className='m-3'>
            <div data-aos= "zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                        <FiShoppingBag size={30} />
                        Shop me
                    </h1>
                    <p> Discover the latest trends and unbeatable deals at our store. 
        From fashion to gadgets, we bring you high-quality products at the best prices. 
        Shop now and enjoy a seamless shopping experience!</p>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold  sm:text-left text-justify mb-3'> 
                            Links:
                        </h1>
                        <ul className='flex flex-col gap-3'>
                        {Footerlinks.map((data) => (
                            <li className='cursor-pointer hover:text-[#4263eb] hover:translate-x-1 duration-100 text-gray-200 ' key={data.title}> {data.title}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div>
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
                        <FiShoppingBag size={30} />
                        Shop me
                    </h1>
                    <ul className='flex flex-col gap-3'>
                        {Footerlinks.map((data) => (
                            <li className='cursor-pointer hover:text-[#4263eb] hover:translate-x-1 duration-100 text-gray-200 ' key={data.title}>{data.title}
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                <div className='ml-[20px]'>
                    <div className='flex items-center justify-center gap-8 mt-6 ml-[660px]'>
                    <a href="https://www.instagram.com/wasifali2468?igsh=MW10Zjhkd2p3eWdocw==" >
                        <FaInstagram className='text-3xl'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wasif-ali-7693242a3" target="_blank" >
                        <FaLinkedin className='text-3xl'/>
                    </a>
                    <a href="https://www.facebook.com/share/1FF4CxNrVT/" target="_blank">
                        <FaFacebook className='text-3xl'/>
                    </a>
                    <a href="https://x.com/wasifali2468?t=7HZGWze3PR1uOHm8BUZTjw&s=09" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='text-3xl'/>
                    </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                            <FaMapLocationDot/>
                            <p>I Wasif Me</p>
                        </div>
                        <div className='flex items-center gap-3  mt-3'>
                        <IoCall/>
                        <p>+9233 998877661</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Footer