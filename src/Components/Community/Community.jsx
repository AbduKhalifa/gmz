
import React from 'react'


import styles from "./community.module.css";
import Intro from './ChildrenComponents/Intro/Intro';
import Blogs from './ChildrenComponents/Blogs/Blogs';


export default function Community() {



  return (
    <section>
      <Intro />
      <Blogs />
    </section>
  )
}
