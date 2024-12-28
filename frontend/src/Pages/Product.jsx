import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

    const {productId} = useParams();
    const {products,currency,addToCart} = useContext(ShopContext);
    const [productData, setProductData] = useState(false); // Correct destructuring for useState
    const [image,setImage] = useState('');
    const [size,setSize] = useState('')


    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item); // Use setProductData correctly
                setImage(item.image[0])

                return null;
            }
        });
    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products]); // Add 'products' as a dependency

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/*-------------product data----------- */}
          <div className='flex gap-12 sn:gap-12 flex-col sm:flex-row'>
               {/*-----------product image------------ */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item,index)=>(
                                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                            <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                {/*---------product infor---------- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_dull_icon}alt="" className="w-3 5" />
                        <p className='p1-2'>(122)</p>

                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                            <p>Select Size</p>
                            <div className='flex gap-2'>
                                {productData.sizes.map((item,index)=>(
                                    <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>
                                    {item}</button>
                                 ))}
                            </div>
                    </div>
                    <button onClick={()=>addToCart(productData?._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery available.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
          </div>
            {/*-------Descreption & review section */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text=gray-500'>
                    <p>An e-commerce website is an online platform that enables users to browse, buy, and sell products or services securely. It offers features like product catalogs, search, shopping carts, and easy checkouts, providing convenience for customers and tools for businesses to manage sales effectively.</p>
                    <p>E-commerce website is an online platform where people can browse products, add them to a cart, and buy them easily. It offers features like secure payments, order tracking, and quick delivery.</p>
                </div>
            </div>
                
            {/*------display related products----------- */}    
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
      ): <div className='opacity-0'></div>
    }

export default Product
