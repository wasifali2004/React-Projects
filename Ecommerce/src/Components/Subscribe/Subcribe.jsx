import React from 'react'

const Subcribe = () => {
  return (
    <div data-aos = "zoom-in" className='mb-20 bg-slate-700 dark:bg-gray-800'>
        <div className='backdrop-blur-sm py-10 m-5'>
            <div className='space-y-6 max-w-xl mx-auto'>
             <h1 className='text-2xl text-center sm:text-left  sm:text-4xl font-semibold text-white'>
                Get Notified about New Products
            </h1>
            <input type="email" data-aos="fade-up" placeholder='Enter your email' className='w-full p-3 text-white border border-white placeholder:text-white rounded ' />
            </div>
        </div>
    </div>
    
  )
}

export default Subcribe