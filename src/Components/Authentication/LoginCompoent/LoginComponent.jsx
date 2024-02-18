

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
    const [warning, setWarning] = useState("");
    const [remember, setRemember] = useState(false);

    function gotoHomePage() {
        navigation("/");
    }

    function putTokenOnStorage(myToken) {
        window.localStorage.setItem("tkn", myToken);
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
            console.log(data);
            if (data.status) {
                if (remember) putTokenOnStorage(data.token);
                dispatch(userLogged(data));
                gotoHomePage();
            } else {
                showWarn(data.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className={styles.loginPanel + ' m-auto px-4 sm:p-8 py-8 rounded-xl border-[1px] border-[#19232a] w-[90%] md:w-[60%] lg:w-[40%] max-w-[580px]'}>
            <h3 className='f-1 text-[26px] font-semibold mb-5'>LOGIN</h3>
            <div className='px-2 sm:px-6  '>
                <form className='w-full flex flex-col gap-5'>
                    <div className=''>
                        <label className='f-1 font-semibold'>Email address <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            onChange={({ target }) => setLoginAccount({ ...loginAccount, email: target.value })}
                            type="email"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className=''>
                        <label className='f-1 font-semibold'>Password <span className='text-[red] f-1 font-black'>*</span></label>
                        <input
                            onChange={({ target }) => setLoginAccount({ ...loginAccount, password: target.value })}
                            type="password"
                            className='bg-helperH p-3 w-full outline-none rounded-md border-[1px] border-[#19232a] font-semibold text-[14px]'
                        />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <input
                            onChange={(event) => setRemember(event.target.checked)}
                            checked={remember}
                            type="checkbox"
                            className={styles.checkbox + " border-[1px] border-[#19232a]"}
                        />
                        <span>Remember</span>
                    </div>
                    <div className='flex justify-between'>
                        <button
                            onClick={login}
                            className='px-6 py-3 bg-base rounded-[4px] f-1 text-helper font-black'
                        >
                            LOG IN
                        </button>

                        <div className='flex flex-col items-end'>
                            <button className=' hover:underline text-base text-[14px]'>Lost your password</button>
                            <button
                                className=' hover:underline text-base text-[14px]'
                                onClick={getRegisterPanel}
                            >Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
