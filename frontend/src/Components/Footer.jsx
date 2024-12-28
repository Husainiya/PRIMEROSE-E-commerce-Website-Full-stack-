import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'> 
            Lorem Insum is simply dummy text of the printing and typesetting industy.Lorem inspusam hasbeen there.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+94-3545-678-450</li>
                    <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
    
        <div>
            <hr />
                <p className='py-5 text-5m text-center'>Copyright 2024 hsynyhsn1122@gmail.com . All Right Reserved. </p>
        </div>

    </div>
  )
}

export default Footer
