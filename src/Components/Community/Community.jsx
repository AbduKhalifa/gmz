
import React from 'react'


import styles from "./community.module.css";
import { useSelector } from 'react-redux';
import Intro from './ChildrenComponents/Intro/Intro';
import Trending from './ChildrenComponents/Trending/Trending';
import News from './ChildrenComponents/News/News';
import Footer from './ChildrenComponents/Footer/Footer';


export default function Community() {

  const userData = useSelector(reducers => reducers.uReducer);


  return (
    <>
      <section>
        <Intro />
        <Trending />
        <News />

      </section>
      <Footer />
    </>
  )
}
