



import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import styles from "./intro.module.css";


export default function Intro() {
    return (
        <div className=' relative'>
            <div className={styles.overlay + ' absolute top-0 left-0 w-full h-full z-10 '}>
                <div className='flex items-center justify-center h-full flex-col'>
                    <h1 className='font-semibold text-center sm:font-black text-[46px] sm:text-[80px]'> GMZ COMMUNITY </h1>
                    <p className='text-[38px] sm:text-[70px]'> <span className='text-[38px] sm:text-[70px] text-helper'>4</span> EVER</p>
                </div>
            </div>
            <Swiper
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                allowTouchMove={false}
                speed={1300}
            >
                <SwiperSlide>
                    <section className='w-full h-screen'>
                        <img
                            src={require("./../../../../assets/intro1.jpg")}
                            alt="A person is playing"
                            className='h-full object-cover object-center w-full'
                        />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='w-full h-screen'>
                        <img
                            src={require("./../../../../assets/intro2.jpg")}
                            alt="A person is playing"
                            className='h-full object-cover object-center w-full'
                        />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='w-full h-screen'>
                        <img
                            src={require("./../../../../assets/intro3.jpg")}
                            alt="A person is playing"
                            className='h-full object-cover object-center w-full'
                        />
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
