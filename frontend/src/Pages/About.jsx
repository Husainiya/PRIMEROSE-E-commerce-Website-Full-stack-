import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t text=gray-400'>
          <Title text1={'ABOUT'}  text2={' US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-10'>
              <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>At Forever Dress, we create timeless, stylish, and sustainable dresses for every occasion. Our mission is to deliver elegant designs, inclusive fits, and high-quality fashion that empower you to feel confident and beautiful.</p>
                    <p>We blend style, comfort, and sustainability to bring you the perfect dress for every moment. Designed with care and crafted to last, our collections celebrate elegance and confidence for everyone.</p>
                    <p>Your perfect dress, forever yours!</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>At Forever Dress, our mission is to design timeless, stylish, and sustainable dresses that empower confidence and celebrate individuality. We are committed to delivering high-quality fashion with inclusive fits, ensuring every woman feels beautiful, comfortable, and elegant for every occasion.</p>
              </div>
        </div>
        <div>

          <div className='text-4xl py-4'>
            <Title text1={'WHY '}  text2={' CHOOSE US'}/>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurance: </b>
                  <p className='text-gray-600'>At Forever Dress, quality is at the heart of everything we do. Each dress undergoes rigorous testing and careful inspection to ensure the highest standards of craftsmanship, durability, and design. From fabric selection to final stitching, we are dedicated to delivering products that exceed expectations. Your satisfaction and trust in our quality are our top priorities.</p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convenience: </b>
                  <p className='text-gray-600'>We prioritize your convenience every step of the way. From seamless online shopping and easy navigation to fast delivery and hassle-free returns, we ensure your experience is smooth and enjoyable. Finding your perfect dress has never been easier!</p>
              </div>

              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service: </b>
                  <p className='text-gray-600'>We prioritize your satisfaction above all else. Our dedicated support team is here to assist you every step of the way, ensuring a seamless shopping experience. From personalized styling advice to quick and hassle-free returns, we are committed to delivering exceptional service that makes you feel valued and cared for. Your happiness is our top priority!</p>
              </div>
            </div>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About
