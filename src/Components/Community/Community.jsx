
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

import styles from "./community.module.css";
import Intro from './ChildrenComponents/Intro/Intro';


export default function Community() {


  return (
    <section>
      <Intro />
    </section>
  )
}
