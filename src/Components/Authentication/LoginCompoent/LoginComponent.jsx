

import React, { useRef, useState } from 'react';
import styles from "./../auth.module.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoWarningSharp } from "react-icons/io5";
import { domain } from "./../../../vars/var"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogged } from '../../../redux/uSlice';



export default function LoginComponent({ getRegisterPanel }) {

    const dispatch = useDispatch()
    const navigation = useNavigate();
    const warnElement = useRef(null);

    const [warninigColor, setWarningColor] = useState("#fff000")
    const [loginAccount, setLoginAccount] = useState({
        email: "",
        password: ""
    })

    const [warning, setWarning] = useState("")

    function gotoHomePage() {
        navigation("/");
    }

    function putTokenOnStorage(myToken) {
        window.localStorage.setItem("tkn", myToken);
    }
    function deleteTokenFromLocalStorage() {
        window.localStorage.removeItem("tkn");
    }

    function showWarn(warnMessage) {
        warnElement.current.style.opacity = "1";
        setTimeout(() => warnElement.current.style.opacity = "0", 4000)
        setWarning(warnMessage)
    }

    async function login() {
        const route = "/auth/login";
        try {
            const { data } = await axios.post(domain + route, loginAccount);
            if (data.status) {
                putTokenOnStorage(data.token);
                dispatch(userLogged(data));
                gotoHomePage();
            } else {
                showWarn(data.msg);
            }
        } catch (error) {
            showWarn(error.response.data.msg)
        }
    }


    return (
        <div className={styles.loginPanel + '  mx-auto w-[90%] sm:w-[70%] md:w-[50%] border-helper border-4 '}>
            <div className=" bg-helperH">
                <h2 className='text-center p-2 font-semibold'> Login</h2>
            </div>
            <div className=' bg-helperH p-4'>
                <div className=' flex items-center bg-white p-2 gap-2 mb-4'>
                    <FaUser color='#000' size={24} />
                    <input
                        type="email"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='Email'
                        value={loginAccount.email}
                        onChange={({ target }) => {
                            setLoginAccount({ ...loginAccount, email: target.value })
                        }}
                    />
                </div>
                <div className=' flex items-center bg-white p-2 gap-2 '>
                    <RiLockPasswordFill color='#000' size={24} />
                    <input
                        type="password"
                        className='flex-1 text-black border-0  outline-none '
                        placeholder='password'
                        value={loginAccount.password}
                        onChange={({ target }) => {
                            setLoginAccount({ ...loginAccount, password: target.value })
                        }}
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
                <p className='hover:underline hover:text-base cursor-pointer'>Forget your password</p>
            </div>
            <div className='pt-4 bg-helperH flex items-center justify-center'>
                <button
                    className={'bg-base px-8 py-2 rounded-full ' + styles.loginBtn}
                    onClick={login}
                >LOGIN</button>
            </div>
            <div className='bg-helperH pb-4 flex items-center justify-center'>
                <button className='text-xs hover:underline' onClick={getRegisterPanel}>Sign Up</button>
            </div>
        </div>
    )
}
