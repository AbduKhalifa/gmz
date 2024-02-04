


import React, { useRef, useState } from 'react';
import styles from "./../auth.module.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoWarningSharp } from "react-icons/io5";
import { domain } from '../../../vars/var';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
        <div className={styles.registerPanel + ' mx-auto w-[90%] sm:w-[70%] md:w-[50%] border-helper border-4  '}>
            <div className=" bg-helperH">
                <h2 className='text-center p-2 font-semibold'> Sign Up </h2>
            </div>
            <div className=' bg-helperH p-4'>
                <div className=' flex items-center bg-white p-2 gap-2 mb-4'>
                    <FaUser color='#000' size={24} />
                    <input
                        type="email"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='Email'
                        onChange={({ target }) => {
                            setAccount({ ...account, email: target.value });
                        }}
                        value={account.email}
                    />
                </div>
                <div className=' flex items-center bg-white p-2 gap-2 mb-4'>
                    <MdDriveFileRenameOutline color='#000' size={24} />
                    <input
                        type="text"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='Nickname'
                        onChange={({ target }) => {
                            setAccount({ ...account, nickname: target.value });
                        }}
                        value={account.nickname}
                    />
                </div>
                <div className=' flex items-center bg-white p-2 gap-2 mb-4'>
                    <RiLockPasswordFill color='#000' size={24} />
                    <input
                        type="password"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='password'
                        onChange={({ target }) => {
                            setAccount({ ...account, password: target.value });
                        }}
                        value={account.password}
                    />
                </div>
                <div className=' flex items-center bg-white p-2 gap-2'>
                    <RiLockPasswordFill color='#000' size={24} />
                    <input
                        type="password"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='re-password'
                        onChange={({ target }) => {
                            setAccount({ ...account, re_password: target.value });
                        }}
                        value={account.re_password}
                    />
                </div>
            </div>
            <div className='bg-helperH '>
                <div
                    className={styles.warnElement + ' px-4 py-1 flex justify-center gap-2 items-center h-[14px]'}
                    ref={warnElement}
                    style={{ opacity: "0" }}
                >
                    <IoWarningSharp color={warninigColor} />
                    <span className={`text-sm`} style={{ color: warninigColor }}>
                        {warning}
                    </span>
                </div>
            </div>
            <div className='pt-4 bg-helperH flex items-center justify-center'>
                <button
                    className={'bg-helper px-8 py-2 rounded-full ' + styles.loginBtn}
                    onClick={signUp}
                >SIGN UP</button>
            </div>
            <div className='bg-helperH pb-4 flex items-center justify-center'>
                <button className='text-xs hover:underline' onClick={getLoginPanel}>Log in</button>
            </div>
        </div>
    )
}
