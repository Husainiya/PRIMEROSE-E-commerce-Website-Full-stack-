import React from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title';
import NewsletterBox from '../Components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'}  text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-4'>
              <p className='font-semibold text-4xl text-gray-600'>Our Store</p>
              <p  className='text-gray-500'>54709 Willes Station <br />Suite 350, Colombo, Sri Lanka</p>
              <p className='text-gray-500'>Tel:(+94) 555-00122 <br />Email: admin@forever.com</p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
              <p  className='text-gray-500'>Learn more about our teams and job openings.</p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
              
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
