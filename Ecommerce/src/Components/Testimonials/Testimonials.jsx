import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductData = [
  {
    "id": 1,
    "name": "Jack",
    "description": "An adventurous spirit with a passion for exploring new ideas. Jack believes in innovation and pushing boundaries to achieve greatness.",
    "img": "https://picsum.photos/id/237/200/300"
  },
  {
    "id": 2,
    "name": "Henry",
    "description": "A creative thinker and problem-solver, Henry is known for his strategic mindset and ability to bring visions to life.",
    "img": "https://picsum.photos/102/102"
  },
  {
    "id": 3,
    "name": "Williams",
    "description": "With a keen eye for detail and a commitment to excellence, Williams ensures that every project he touches turns into success.",
    "img": "https://picsum.photos/104/104"
  },
  {
    "id": 4,
    "name": "Sarah",
    "description": "A dynamic leader who thrives on collaboration and innovation. Sarah's passion for creativity is unmatched.",
    "img": "https://picsum.photos/101/101"
  },
  {
    "id": 5,
    "name": "Smith",
    "description": "A dedicated professional with expertise in building strong relationships and delivering outstanding results.",
    "img": "https://picsum.photos/103/103"
  }
]


const Testimonials = () => {
  var setting = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
      ]
  }
  return (
    <div className='py-10 mb-10'>
        <div className='margin-3'>
          <div className='text-center mb-10 mx-auto mx-w-[600px]'>
          <p className='text-sm text-[#4263eb]' data-aos= "fade-up">What our customer saying!</p>
          <h1 data-aos="fade-up" className='text-3xl text-bold'>Testimonials</h1>
          <p data-aos = "fade-up" className='text-sm text-gray-400'> Discover the latest trends and unbeatable deals at our store.From fashion to gadgets, we bring you high-quality products at the best prices. 
          Shop now and enjoy a seamless shopping experience!</p>
          </div>

          <div data-aos = "zoom-in">
          <Slider {...setting}>
            {ProductData.map((data) => (
              <div className='my-6'>
                <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-[#4263eb]/10 relative'>

                  <div className='mb-4'>
                    <img src={data.img} alt="Testimonial Image" className='rounded-full w-20 h-20' />
                  </div>

                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs dark:text-slate-300 text-gray-500'> {data.description}</p>
                      <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
                    </div>
                  </div>

                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
    </div>
  )
}

export default Testimonials