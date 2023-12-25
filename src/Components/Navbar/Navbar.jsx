

import React from 'react'
import styles from "./nav.module.css";

export default function Navbar() {
    return (
        <header className={styles.header + " py-2  px-3 sm:px-5 md:px-6 lg:px-12 bg-helper"}>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={require("./../../assets/logo.png")} alt="Logo" width={100} />
                </div>
                <div>
                    <ul className='flex items-center gap-3'>
                        <li className=' text-[20px] cursor-pointer'> Community </li>
                        <li className=' text-[20px] cursor-pointer'> Shop </li>
                        <li className=' text-[20px] cursor-pointer'> Chats </li>
                        <li className=' text-[20px] cursor-pointer'> Games </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
