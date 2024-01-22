

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
import { handleActivePage } from './utils.navbar';
import { Link } from 'react-router-dom';
// import { handleClickEventOnDocument } from './utils.navbar';



export default function Navbar() {


    const clickAudio = useRef(null)
    function runClickAudio() {
        clickAudio.current.play();
    }
    const [showTabletNav, setShowTabletNav] = useState(false);



    /**
     * 
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

    return (
        <header className={styles.header + " bg-helper py-2  px-3 sm:px-5 md:px-6 lg:px-12"}>
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
                                onClick={handleActivePage}
                                className={' text-[20px] cursor-pointer flex gap-1 relative ' + styles.active}>
                                <MdHomeFilled size={24} />
                                <span className=" text-[20px]">Home</span>
                            </li>
                        </Link>
                        <Link to={"/shop"}>
                            <li
                                onClick={handleActivePage}
                                className=' text-[20px] cursor-pointer flex gap-1 relative '>
                                <FaShopify size={24} />
                                <span className=" text-[20px]">Shop</span>
                            </li>
                        </Link>
                        <Link to={"/groups"}>
                            <li
                                onClick={handleActivePage}
                                className=' text-[20px] cursor-pointer flex gap-1 relative'>
                                <PiChatsFill size={24} />
                                <span className=" text-[20px]">Groups</span>
                            </li>
                        </Link>
                        <Link to={"/clans"}>
                            <li
                                onClick={handleActivePage}
                                className=' text-[20px] cursor-pointer flex gap-1 relative'>
                                <HiUserGroup size={24} />
                                <span className=" text-[20px]">Clans</span>
                            </li>
                        </Link>
                        <Link to={"/challengs"}>
                            <li
                                onClick={handleActivePage}
                                className=' text-[20px] cursor-pointer flex items-center gap-1 relative'>
                                <TbSwords size={24} />
                                <span className=" text-[20px]">Challengs</span>
                            </li>
                        </Link>
                        <Link to={"account"}>
                            <li
                                onClick={handleActivePage}
                                className=' text-[20px] cursor-pointer flex items-center gap-1 relative'>
                                <MdAccountBox size={24} />
                                <span className=" text-[20px]">Account</span>
                            </li>
                        </Link>
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
                                className={styles.hideListBtn + ' bg- rounded-md flex p-2'}
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
                                <li className={styles.active + ' flex items-center gap-1 py-1 cursor-pointer'}
                                    onClick={handleActivePage}
                                >
                                    <MdHomeFilled size={26} />
                                    <span className='text-[20px] line-clamp-1'>Home</span>
                                </li>
                            </Link>
                            <Link to={"/shop"}>
                                <li
                                    onClick={handleActivePage}
                                    className='flex items-center gap-1  py-1 cursor-pointer'>
                                    <FaShopify size={26} />
                                    <span className='text-[20px] line-clamp-1'>Shop</span>
                                </li>[]
                            </Link>
                            <Link to={"/groups"}>
                                <li
                                    onClick={handleActivePage}
                                    className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <PiChatsFill size={26} />
                                    <span className='text-[20px] line-clamp-1'>Groups</span>
                                </li>
                            </Link>
                            <Link to={"/clans"}>
                                <li
                                    onClick={handleActivePage}
                                    className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <HiUserGroup size={26} />
                                    <span className='text-[20px] line-clamp-1'>Clans</span>
                                </li>
                            </Link>
                            <Link to={"/challengs"}>
                                <li
                                    onClick={handleActivePage}
                                    className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <TbSwords size={26} />
                                    <span className='text-[20px] line-clamp-1'>Challengs</span>
                                </li>
                            </Link>
                            <Link to={"/account"}>
                                <li
                                    onClick={handleActivePage}
                                    className='flex items-center gap-1 pt-1 cursor-pointer'>
                                    <MdAccountBox size={26} />
                                    <span className='text-[20px] line-clamp-1'>Account</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
