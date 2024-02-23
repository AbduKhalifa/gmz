import React from 'react'


import styles from "./shop.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';

function DiscountArea({ products }) {

    console.log("asfd");
    return (<>
        {products && products.length > 0 ?
            <div className=' mb-12'>
                <h4 className='text-base f-1 text-[32px] mb-6'>DISCOUNT</h4>
                <Swiper
                    spaceBetween={20}
                    className="mySwiper w-full h-full"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        460: {
                            slidesPerView: 2,
                        },
                        780: {
                            slidesPerView: 3,
                        },
                        862: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        products.map((product) => {
                            return <SwiperSlide key={product.id} className='flex items-center justify-center text-[18px] text-center '>
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    cat={product.category.name}
                                    pathImage={product.image}
                                    discount={product.discount}
                                />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
            :
            null
        }
    </>

    )
}


export default React.memo(DiscountArea)
