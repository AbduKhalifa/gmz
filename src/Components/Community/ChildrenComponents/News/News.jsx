



import React from 'react';
import styles from "./news.module.css";
import bg from "./../../../../assets/images/banner1.png";
import Article from './Article';

export default function News() {
    return (
        <section
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
            <div className='px-6 md:px-12 lg:px-16 xl:px-24  relative z-10 py-6 sm:py-10 md:py-12'  >
                <div className={styles.overlay + " z-20 "}></div>
                <h1 className='text-center uppercase f-1 text-text text-[36px] z-30 font-black mb-6 relative'> blogs </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-30 relative '>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </section>
    )
}
