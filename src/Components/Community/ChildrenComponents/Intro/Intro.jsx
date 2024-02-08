



import React, { useEffect, useRef, useState } from 'react'
import styles from "./intro.module.css";
import { allGifs } from './gifs';


export default function Intro() {


    const gifPlace = useRef(null);
    const [gif, setGif] = useState(0)

    function changeGif() {
        const e = gifPlace.current;
        const length_gifs = allGifs.length;

        function getGif() {
            const randomGif = Math.floor(Math.random() * length_gifs);
            if (gif != randomGif) {
                return randomGif
            }
            return getGif()
        }

        const newGif = getGif();
        e.style.opacity = "0";
        setTimeout(() => {
            setGif(newGif)
            e.style.opacity = 1;
        }, 450)
        return
    }

    useEffect(() => {
        const loopId = setInterval(() => {
            changeGif();
        }, 6000)
        return () => {
            clearInterval(loopId)
        }
    }, [gif])

    return (
        <div className=' relative xl:mb-40 mb-20 2xl:mb-60'>

            <div className={styles.overlay + ' absolute top-0 left-0 w-full h-full z-10 '}>
                <div className={' flex items-center justify-center h-full flex-col f-1'}>
                    <h1 className='font-semibold text-center sm:font-black text-[46px] sm:text-[80px] text-text f-1'> GMZ COMMUNITY </h1>
                    <p className='text-[38px] text-text sm:text-[70px] f-1'> <span className='text-[40px] sm:text-[70px] text-base f-1'>4</span> EVER</p>
                </div>
            </div>
            <section className='w-full h-screen'>
                <img
                    ref={gifPlace}
                    src={require(`./../../../../assets/${allGifs[gif]}.gif`)}
                    alt="A person is playing"
                    className={'h-full object-cover object-center w-full ' + styles.gifPlace}
                />
            </section>

        </div>
    )
}
