
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';


import styles from "./community.module.css";
import Intro from './ChildrenComponents/Intro/Intro';
import { AiTwotoneDislike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { handleLengthString } from './utils.community';
import Blogs from './ChildrenComponents/Blogs/Blogs';


export default function Community() {

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

  const x = `L Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Cupiditate mollitia repellat molestias exercitationem dolorum
  L Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Cupiditate mollitia repellat molestias exercitationem dolorum
  L Lorem ipsum dolor sit amet 
  Cupiditate mollitia repellat molestias exercitationem dolorum
  L Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Cupiditate mollitia repellat molestias exercitationem dolorum
  L Lorem ipsum dolor sit amet `

  return (
    <section>
      <Intro />
      <i className={styles.italicRight + ` block bg-helper w-full h-[56px]`}></i>
      <Blogs />
      <i className={styles.italicLeft + ` block bg-helper w-full h-[56px] relative -top-[2px]`}></i>
    </section>
  )
}
