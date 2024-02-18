


import React, { useRef, useState } from 'react';
import styles from "./../auth.module.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoWarningSharp } from "react-icons/io5";
import { domain } from '../../../vars/var';
import axios from 'axios';


export default function SignUpComponent({ getLoginPanel }) {

    const warnElement = useRef(null);

    const [warninigColor, setWarningColor] = useState("#fff000")
    const [warning, setWarning] = useState("");
    const [account, setAccount] = useState({
        email: "",
        nickname: "",
        password: "",
        re_password: ""
    });


    async function createAccount(newAccount) {
        const route = "/auth/create";
        try {
            const { data } = await axios.post(domain + route, newAccount)
            if (data.status) {
                setWarningColor("#009E0B");
                showWarn(data.msg);
                setWarningColor("#fff000");
            }
            else {
                setWarningColor("#fff000");
                showWarn(data.msg);
            }
            clearInputs()
            getLoginPanel();
        } catch (error) {
            console.log(error);
        }
    }

    function showWarn(warnMessage) {
        warnElement.current.style.opacity = "1";
        setTimeout(() => warnElement.current.style.opacity = "0", 4000)
        setWarning(warnMessage)
    }

    function clearInputs() {
        setAccount({
            email: "",
            re_password: "",
            nickname: "",
            password: "",
        })
    }

    function signUp() {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
        const nicknameRegex = /^[A-z]{3,12}( [A-z]{3,12})?$/
        if (!emailRegex.test(account.email)) {
            showWarn("Email not valid")
        } else if (!nicknameRegex.test(account.nickname)) {
            showWarn("nickname not valid")
        } else if (!passwordRegex.test(account.password)) {
            showWarn("minimum eight characters, at least one letter and one number")
        } else if (account.re_password != account.password) {
            showWarn("password not matched")
        }
        else
            createAccount(account);
    }

    return (
        <div className={styles.registerPanel + ' m-auto px-4 sm:p-8 py-8 rounded-xl border-[1px] border-[#19232a] w-[90%] md:w-[60%] lg:w-[40%] max-w-[580px]'}>
            <h3 className='f-1 text-[26px] font-semibold mb-5'>SIGNUP</h3>
            <div className='px-2 sm:px-6 '>
                <form className='w-full flex flex-col gap-5'>
                    <div className=''>
                        <label className='f-1 font-semibold'>Email address <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            value={account.email}
                            onChange={({ target }) => {
                                setAccount({ ...account, email: target.value })
                            }}
                            type="email"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className=''>
                        <label className='f-1 font-semibold'>Username <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            value={account.nickname}
                            onChange={({ target }) => {
                                setAccount({ ...account, nickname: target.value })
                            }}
                            type="text"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className=''>
                        <label className='f-1 font-semibold'>Password <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            value={account.password}
                            onChange={({ target }) => {
                                setAccount({ ...account, password: target.value })
                            }}
                            type="password"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className=''>
                        <label className='f-1 font-semibold'>Re-password <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            value={account.re_password}
                            onChange={({ target }) => {
                                setAccount({ ...account, re_password: target.value })
                            }}
                            type="password"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className='flex justify-between'>
                        <button
                            onClick={signUp}
                            className='px-6 py-3 bg-base rounded-[4px] f-1 text-helper font-black'
                        >
                            SIGN UP
                        </button>

                        <div className='flex flex-col items-end'>
                            <button
                                className=' hover:underline text-base text-[14px]'
                                onClick={getLoginPanel}
                            >Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
