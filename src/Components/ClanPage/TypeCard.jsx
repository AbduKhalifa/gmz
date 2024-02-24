

import React from 'react'
import styles from "./clans.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function TypeCard({ title, image, children, path }) {
    return (
        <Link to={path} className={'  relative cursor-pointer  overflow-hidden  ' + styles.card}>
            <div className='h-full '>
                <img
                    className=' min-w-full object-cover object-center min-h-full '
                    src={require(`./../../assets/${image}`)}
                    alt="" />
            </div>
            <div className='w-full h-full absolute top-0 left-0 bg-[#0000008a] p-6'>
                <div className='flex items-center  text-base'>
                    <IoMdArrowDropright size={26} />
                    <h6 className='text-[18px] font-black f-1'>{title}</h6>
                </div>
                {
                    children
                }
            </div>
            <div className={styles.arrow + " absolute  left-[50%] bg-base w-[26px] h-[16px] -translate-x-[50%]  "}>

            </div>
        </Link>
    )
}
