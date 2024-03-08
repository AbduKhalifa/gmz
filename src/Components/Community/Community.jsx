
import React, { useEffect, useState } from 'react'


import styles from "./community.module.css";
import { useSelector } from 'react-redux';
import Intro from './ChildrenComponents/Intro/Intro';
import Trending from './ChildrenComponents/Trending/Trending';
import News from './ChildrenComponents/News/News';
import Footer from './ChildrenComponents/Footer/Footer';
import axios from 'axios';

import { domain } from "./../../vars/var";
export default function Community() {

  const userData = useSelector(reducers => reducers.uReducer);

  const [trends, setTrends] = useState(null);


  async function getTrends() {
    const endPoint = "/home/trends";
    const { data } = await axios.get(domain + endPoint);
    setTrends(data.trends)
    console.log(data.trends);
  }

  useEffect(() => {
    getTrends()
  }, [])
  return (
    <>
      <section>
        <Intro />
        <Trending trends={trends} />
        <News />

      </section>
      <Footer />
    </>
  )
}
