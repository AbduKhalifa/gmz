

import React, { useState } from 'react';
import styles from "./../auth.module.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoWarningSharp } from "react-icons/io5";

export default function LoginComponent({ getRegisterPanel }) {

    const [warning, setWarning] = useState("")

    return (
        <div className={styles.loginPanel + '  mx-auto w-[90%] sm:w-[70%] md:w-[50%] border-helper border-4 '}>
            <div className=" bg-helper">
                <h2 className='text-center p-2 font-semibold'> Login</h2>
            </div>
            <div className=' bg-base p-4'>
                <div className=' flex items-center bg-white p-2 gap-2 mb-4'>
                    <FaUser color='#000' size={24} />
                    <input type="email" className='flex-1 text-black border-0  outline-none ' placeholder='Email' />
                </div>
                <div className=' flex items-center bg-white p-2 gap-2 '>
                    <RiLockPasswordFill color='#000' size={24} />
                    <input type="password" className='flex-1 text-black border-0  outline-none ' placeholder='password' />
                </div>
            </div>
            <div className='bg-base'>
                <div className='flex justify-center gap-2 items-center h-[14px]'>
                    {
                        warning ?
                            <IoWarningSharp color='#FFFF00	' />
                            :
                            null
                    }
                    <span className=' text-[#FFFF00] text-sm'>
                        {warning}
                    </span>
                </div>
            </div>
            <div className='pt-4 bg-base flex items-center justify-center'>
                <button className={'bg-helper px-8 py-2 rounded-full ' + styles.loginBtn}>LOGIN</button>
            </div>
            <div className='bg-base pb-4 flex items-center justify-center'>
                <button className='text-xs hover:underline' onClick={getRegisterPanel}>Sign Up</button>
            </div>
        </div>
    )
}
