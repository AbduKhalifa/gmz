



import React from 'react'
import styles from "./intro.module.css";


export default function Intro() {
    return (
        <div className=' relative xl:mb-40 mb-20 2xl:mb-60'>
            <div className={styles.overlay + ' absolute top-0 left-0 w-full h-full z-10 '}>
                <div className={'flex items-center justify-center h-full flex-col f-1'}>
                    <h1 className='font-semibold text-center sm:font-black text-[46px] sm:text-[80px] text-text f-1'> GMZ COMMUNITY </h1>
                    <p className='text-[38px] text-text sm:text-[70px] f-1'> <span className='text-[40px] sm:text-[70px] text-base f-1'>4</span> EVER</p>
                </div>
            </div>
            <section className='w-full h-screen'>
                <img
                    src={require("./../../../../assets/lol.gif")}
                    alt="A person is playing"
                    className='h-full object-cover object-center w-full'
                />
            </section>

        </div>
    )
}
