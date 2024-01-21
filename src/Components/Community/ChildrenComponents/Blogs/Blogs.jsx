

import React, { useEffect, useState } from 'react';
import styles from "./blogs.module.css";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { handleLengthString } from '../../utils.community';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';
import axios from 'axios';


export default function Blogs() {


    const breakpoints = {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    };

    const [blogs, setBlogs] = useState(null);

    async function getBlogs() {
        const { data } = await axios.get("http://localhost:3001/");
        setBlogs(data)
        console.log(data);
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <section className=' bg-helper px-4 sm:px-8 md:px-[80px] lg:px-[120px] py-12 relative -top-[1px]'>
            <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={breakpoints}
            >
                {
                    blogs ?
                        blogs.map((e, i) => {

                            return <SwiperSlide className={styles.slide} key={i} >
                                <article className=' p-4  relative h-full flex '>
                                    <div className={" absolute top-0 left-0 -z-10 w-full h-full"}>
                                        <img src={require("./../../../../assets/test.jpg")} alt="" className='w-full h-full object-cover object-center' />
                                    </div>
                                    <div className={styles.overlay + " absolute top-0 left-0 -z-10 w-full h-full"}>

                                    </div>
                                    <div className={styles.overlay_ + " absolute top-0 left-0  -z-10 w-full h-full"}>

                                    </div>
                                    <section className='flex flex-col justify-between'>
                                        <div>
                                            <div className='flex'>
                                                <h3 className={styles.cardTitle + " font-semibold p-1 px-2"}>
                                                    {e.type}
                                                </h3>
                                            </div>
                                            <div>
                                                <p className=' text-text text-[15px] py-2'>
                                                    {e.content}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-2'>
                                                <div className='flex gap-1'>
                                                    <AiTwotoneDislike className=' text-text' />
                                                    <span className='text-xs text-text'>{e.like}</span>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <AiTwotoneLike className=' text-text' />
                                                    <span className='text-xs text-text'>{e.disLike}</span>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <IoMdEye className='text-text' />
                                                    <span className='text-xs text-text'>{e.views}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span
                                                    className=' underline text-text text-xs mt-2 block cursor-pointer hover:text-white'
                                                    onClick={() => {
                                                        console.log("SHOW");
                                                    }}
                                                >
                                                    Show
                                                </span>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </SwiperSlide>
                        })
                        :
                        undefined
                }
            </Swiper>
        </section>
    )
}
