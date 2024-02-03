
import React from 'react'


import styles from "./community.module.css";
import Intro from './ChildrenComponents/Intro/Intro';
import Blogs from './ChildrenComponents/Blogs/Blogs';
import { useSelector } from 'react-redux';


export default function Community() {

  const userData = useSelector(reducers => reducers.uReducer);
  console.log(userData.nickname);

  return (
    <section>
      <Intro />
      <Blogs />
    </section>
  )
}
