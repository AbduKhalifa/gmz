
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
      {/* <Blogs /> */}
      <section className='px-6 md:px-12 lg:px-16 xl:px-24'>
        <h2 className='f-1 text-[44px] font-black text-base'>Trending</h2>
        <section className='py-12'>
          <div>
            <article className=' grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center'>
              <p className=' text-text text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt,
                enim praesentium ipsum cupiditate debitis minima magnam fugiat, nisi error commodi quidem quae odit autem provident
                voluptatem repudiandae tenetur consectetur eum soluta molestias! Maiores soluta rerum beatae nostrum laborum odio?
              </p>
              <div>
                <img src={require("./../../assets/tr1.png")} alt="" />
              </div>
            </article>
          </div>
          <div>
            <article className=' grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center '>
              <p className=' text-text text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt,
                enim praesentium ipsum cupiditate debitis minima magnam fugiat, nisi error commodi quidem quae odit autem provident
                voluptatem repudiandae tenetur consectetur eum soluta molestias! Maiores soluta rerum beatae nostrum laborum odio?
              </p>
              <div>
                <img src={require("./../../assets/tr2.png")} alt="" />
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
  )
}
