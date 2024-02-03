

import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from "./nav.module.css";
import { TbSwords } from "react-icons/tb";
import { MdHomeFilled } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { PiChatsFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { MdAccountBox } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Navbar() {

    const userData = useSelector(reducers => reducers.uReducer);

    const [currentPage, setCurrentPage] = useState("d");
    const [showTabletNav, setShowTabletNav] = useState(false);


    const clickAudio = useRef(null)

    const { pathname } = useLocation();


    function runClickAudio() {
        clickAudio.current.play();
    }

    function putCurrentPage() {
        const elements = Array.from(document.querySelectorAll(`.${styles.header} ul li`))
        function put(cls) {
            document.querySelectorAll(cls).forEach(e => e.classList.add(styles.active))
        }
        elements.forEach((e) => {
            e.classList.remove(styles.active)
        })
        if (pathname.substring(1) + "__" === "shop__")
            put(".shop__");
        else if (pathname.substring(1) + "__" === "groups__")
            put(".groups__");
        else if (pathname.substring(1) + "__" === "clans__")
            put(".clans__");
        else if (pathname.substring(1) + "__" === "challengs__")
            put(".challengs__");
        else if (pathname.substring(1) + "__" === "account__")
            put(".account__");
        else
            put(".home__");
    }

    /**
     *  This function set event on document 
     */
    useEffect(() => {
        document.addEventListener("click", (eventInfo) => {
            if (
                eventInfo.target.closest(`.${styles.list}`) == document.getElementById("TABLET_LIST")
                ||
                eventInfo.target.closest(`.open-tablet-list`) == document.getElementById("OPEN_TABLET_LIST")
            ) {
                return
            } else {
                if (eventInfo.target.closest(`.hide-tablet-list`) == document.getElementById("HIDE_TABLET_LIST")) {
                    return
                }
                else {
                    setShowTabletNav(false)
                }
            }
        })
    }, [])


    useEffect(() => {
        putCurrentPage(currentPage)
    }, [pathname])

    return (
        <header className={styles.header + " bg-helperH py-2  px-3 sm:px-5 md:px-6 lg:px-12"}>
            <audio ref={clickAudio}>
                <source src={require("./../../soundEffects/click.mp3")} type="audio/mpeg" />
            </audio>

            <div className='flex items-center justify-between'>
                <div>
                    <img src={require("./../../assets/logo.png")} alt="Logo" width={100} />
                </div>
                <div className={styles.PC}>
                    <ul className='flex items-center gap-4'>
                        <Link to={"/"}>
                            <li
                                onClick={() => {
                                    setCurrentPage("home__")
                                }}
                                className={' text-[20px] cursor-pointer flex gap-1 relative home__'}>
                                <MdHomeFilled size={24} />
                                <span className=" text-[20px]">Home</span>
                            </li>
                        </Link>
                        <Link to={"/shop"}>
                            <li
                                onClick={() => {
                                    setCurrentPage("shop__")
                                }}
                                className=' text-[20px] cursor-pointer flex gap-1 relative shop__'>
                                <FaShopify size={24} />
                                <span className=" text-[20px]">Shop</span>
                            </li>
                        </Link>
                        <Link to={"/groups"}>
                            <li
                                onClick={() => {
                                    setCurrentPage("groups__")
                                }}
                                className=' text-[20px] cursor-pointer flex gap-1 relative groups__'>
                                <PiChatsFill size={24} />
                                <span className=" text-[20px]">Groups</span>
                            </li>
                        </Link>
                        <Link to={"/clans"}>
                            <li
                                onClick={() => {
                                    setCurrentPage("clans__")
                                }}
                                className=' text-[20px] cursor-pointer flex gap-1 relative clans__'>
                                <HiUserGroup size={24} />
                                <span className=" text-[20px]">Clans</span>
                            </li>
                        </Link>
                        <Link to={"/challengs"}>
                            <li
                                onClick={() => {
                                    setCurrentPage("challengs__")
                                }}
                                className=' text-[20px] cursor-pointer flex items-center gap-1 relative challengs__'>
                                <TbSwords size={24} />
                                <span className=" text-[20px]">Challengs</span>
                            </li>
                        </Link>
                        {
                            userData.isLogin ?
                                <Link  to={`/profile/${userData.id}`}>
                                    <li className='flex items-center gap-2 hover:opacity-[1]'>
                                        <div className='rounded-full overflow-hidden border-[3px] border-white'>
                                            <img
                                                className=' aspect-square object-center object-cover'
                                                src={require("./../../assets/ac3.jpg")}
                                                alt={"avatar's " + userData.nickname}
                                                width={34} />
                                        </div>
                                        <span className=" text-[20px]">{userData.nickname}</span>
                                    </li>
                                </Link>
                                :
                                <Link to={"account"}>
                                    <li
                                        onClick={() => {
                                            setCurrentPage("account__")
                                        }}
                                        className=' text-[20px] cursor-pointer flex items-center gap-1 relative account__'>
                                        <MdAccountBox size={24} />
                                        <span className=" text-[20px]">Account</span>
                                    </li>
                                </Link>
                        }
                    </ul>
                </div>
                <div className={styles.TABLET + " z-50"}>
                    <div>
                        <button className=' cursor-pointer open-tablet-list'
                            id='OPEN_TABLET_LIST'
                            onClick={() => {
                                runClickAudio();
                                setShowTabletNav(!showTabletNav)
                            }}>
                            <FaThList size={26} />
                        </button>
                    </div>
                    <div
                        id="TABLET_LIST"
                        className={styles.list + " p-3"}
                        style={{ right: showTabletNav ? "0%" : "-100%" }}>
                        <div className='hide-tablet-list'>
                            <button
                                id="HIDE_TABLET_LIST"
                                className={styles.hideListBtn + '  rounded-md flex p-2'}
                                onClick={() => {
                                    runClickAudio()
                                    setShowTabletNav(!showTabletNav)
                                }}
                            >
                                <MdOutlineDoubleArrow size={22} />
                            </button>
                        </div>
                        <ul className='p-2'>
                            <Link to={"/"}>
                                <li className={styles.active + ' flex items-center gap-1 py-1 cursor-pointer home__'}>
                                    <MdHomeFilled size={26} />
                                    <span className='text-[20px] line-clamp-1'>Home</span>
                                </li>
                            </Link>
                            <Link to={"/shop"}>
                                <li
                                    className='flex items-center gap-1  py-1 cursor-pointer shop__'>
                                    <FaShopify size={26} />
                                    <span className='text-[20px] line-clamp-1'>Shop</span>
                                </li>
                            </Link>
                            <Link to={"/groups"}>
                                <li
                                    className='flex items-center gap-1 py-1 cursor-pointer groups__'>
                                    <PiChatsFill size={26} />
                                    <span className='text-[20px] line-clamp-1'>Groups</span>
                                </li>
                            </Link>
                            <Link to={"/clans"}>
                                <li
                                    className='flex items-center gap-1 py-1 cursor-pointer clans__'>
                                    <HiUserGroup size={26} />
                                    <span className='text-[20px] line-clamp-1'>Clans</span>
                                </li>
                            </Link>
                            <Link to={"/challengs"}>
                                <li
                                    className='flex items-center gap-1 py-1 cursor-pointer challengs__'>
                                    <TbSwords size={26} />
                                    <span className='text-[20px] line-clamp-1'>Challengs</span>
                                </li>
                            </Link>
                            {
                                userData.isLogin ?
                                    <Link to={`/profile/${userData.id}`}>
                                        <li className='flex items-center gap-2 hover:opacity-[1]'>
                                            <div className='rounded-full overflow-hidden border-[3px] border-white'>
                                                <img
                                                    className=' aspect-square object-center object-cover'
                                                    src={require("./../../assets/ac3.jpg")}
                                                    alt={"avatar's " + userData.nickname}
                                                    width={28} />
                                            </div>
                                            <span className=" text-[20px]">{userData.nickname}</span>
                                        </li>
                                    </Link>
                                    :
                                    <Link to={"/account"}>
                                        <li
                                            className='flex items-center gap-1 pt-1 cursor-pointer account__'>
                                            <MdAccountBox size={26} />
                                            <span className='text-[20px] line-clamp-1'>Account</span>
                                        </li>
                                    </Link>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
