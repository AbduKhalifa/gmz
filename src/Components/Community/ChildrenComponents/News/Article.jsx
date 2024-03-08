


import React from 'react'
import { FaEye } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import styles from "./news.module.css";

export default function Article() {
    return (
        <article className={'bg-helperH p-2 border-over border-[3px] border-[transparent] cursor-pointer hover:border-over duration-[250ms] ' + styles.article}>
            <div className='flex items-center gap-4 border-b-[2px] border-over pb-2'>
                <div>
                    <img
                        src={require("./../../../../assets/game-sec1-bg.png")}
                        width={36}
                        alt=""
                        className=' aspect-square object-cover object-center rounded-full'
                    />
                </div>
                <h2 className='f-1 font-bold text-text text-[20px]'> Abdelrhman </h2>
            </div>
            <div className='text-text py-2'>
                <h1 className='text-[18px] f-1 uppercase'>Valorant</h1>
                <p className=' text-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem rem dolores nostrum ipsam mollitia.
                    <br />
                    <span className=' hover:underline hover:text-base text-[14px]'> Read more</span>
                </p>
                <div className='flex items-center gap-4 pt-2'>
                    <div className='flex items-center gap-1'>
                        <FaEye />
                        <span>10</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <AiOutlineComment />
                        <span>10</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
