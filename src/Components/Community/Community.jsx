
import React from 'react'


import styles from "./community.module.css";
import { useSelector } from 'react-redux';
import Intro from './ChildrenComponents/Intro/Intro';
import Trending from './ChildrenComponents/Trending/Trending';


export default function Community() {

  const userData = useSelector(reducers => reducers.uReducer);
  console.log(userData.nickname);

  return (
    <section>
      <Intro />
      <Trending />
    </section>
  )
}
