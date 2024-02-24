


import React from 'react';
import backgroundImage from "./../../assets/game-sec1-bg.png";
import styles from "./clans.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import TypeCard from './TypeCard';


export default function TopClans() {
    return (
        <div
            className=' relative z-10 py-12 px-4 sm:px-6 md:px-8 lg:px-12'
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className=' z-10'>
                <h2 className='f-1 text-[28px] text-center'> Join to our community </h2>
                <p className='text-center text-base font-black f-1 text-[20px]'><span className='text-[red]'>#</span> Participate, then conquer other clans and get the prize or spoils </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12'>
                <TypeCard title={"Top Clans"} image={"top-clans.png"} path={"/best-clans"}>
                    <div className='pt-4'>
                        <h6 className='text-[12px] font-extrabold'><span className='text-base f-1 font-black'>#1</span> NINJAS</h6>
                    </div>
                    <div className='pt-4'>
                        <p className='font-semibold text-[16px] text-text'>
                            Join the strongest clans and play a prominent role in international tournaments and competitions
                        </p>
                    </div>
                </TypeCard>
                <TypeCard title={"Local Clans"} image={"location-clans.png"} path={"/local-clans"}>
                    <div className='pt-4'>
                        <p className='font-semibold text-[16px] text-text'>
                            Here join clans that may be close to you geographically and make friends near you
                        </p>
                    </div>
                </TypeCard>
                <TypeCard title={"New Clans"} image={"new-clans.png"} path={"/new-clans"}>
                    <div className='pt-4'>
                        <p className='font-semibold text-[16px] text-text'>
                            Join the new clans and there is a greater chance of becoming one of the founders of the clan
                        </p>
                    </div>
                </TypeCard>
                <TypeCard title={"Prominent Clans"} image={"prominent-clans.png"} path={"/prominent-clans"}>
                    <div className='pt-4'>
                        <p className='font-semibold text-[16px] text-text'>
                            Try to join prominent clans with a good reputation, including heroes and some with prominent members
                        </p>
                    </div>
                </TypeCard>
            </div>
            <div className={styles.overlay + " -z-10"}></div>
        </div>
    )
}
