


import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./profile.module.css";
import { IoDiamondOutline } from "react-icons/io5";
import { GiCrownedSkull } from "react-icons/gi";
import { LiaGamepadSolid } from "react-icons/lia";


export default function Profile() {

    const userData = useSelector(rds => rds.uReducer);

    return (
        <section>
            <section className=' p-6 lg:p-12 flex gap-8 sm:flex-row flex-col'>
                <div className=' bg-[#1C242F] rounded-xl py-6 w-[100%] sm:w-[325px] m-auto max-w-[325px] relative overflow-hidden'>
                    <div className={styles.card + ' px-12 relative'}>
                        <span className={styles.rightLine}></span>
                        <span className={styles.leftLine}></span>
                        <div className=' overflow-hidden rounded-full z-10 relative  border-[4px] border-white'>

                            <img
                                src={require("./../../assets/ac6.jpg")}
                                alt=" avatar "
                                className=' aspect-square '
                            />
                        </div>
                        <div className='pt-4 flex flex-col items-center'>
                            <h3 className=' font-black text-[24px]'> {userData.nickname} </h3>
                            <p className=' text-base text-[18px] font-black'> MASETER </p>
                        </div>
                    </div>
                </div>
                <article className=' flex-1'>
                    <section className='mb-3'>
                        <h4 className='font-extrabold text-base mb-2' style={{ fontSize: "22px" }}>About Player </h4>
                        <p className=' font-semibold text-text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur voluptate sit ipsa quis accusamus vero aperiam laborum harum quisquam.
                        </p>
                    </section>
                    <section className=''>
                        <div className=''>
                            <h4 className='font-extrabold text-base mb-2' style={{ fontSize: "22px" }}>
                                Digital Holdings
                            </h4>
                            <div className='md:px-3 grid grid-cols-2 gap-12 mb-2'>
                                <div className='flex flex-col gap-2 col-span-2 md:col-span-1'>
                                    <div>
                                        <p className='text-[14px]'>Experiences</p>
                                        <span className=' text-base f-1'> 5179.54 exp</span>
                                    </div>
                                    <div>
                                        <p className='text-[12px] '>Crystal Shards</p>
                                        <span className=' text-base f-1'> 794</span>
                                    </div>
                                </div>
                                <div className='p col-span-2 md:col-span-1'>
                                    <p className={styles.lvl + " text-base font-black "}>17 <span className='text-sm'>Level</span> </p>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-extrabold text-base mb-2 text-[24px]' >
                                    Rank
                                </h4>
                                <div className='font-bold text-[20px]'>
                                    silver III
                                </div>
                            </div>
                        </div>
                    </section>
                </article>

            </section>
            <section className='  py-12'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-16 lg:px-24 gap-6'>
                    <div className='flex gap-2 items-center '>
                        <img
                            src={require("./../../assets/team_vs02.png")}
                            alt=""
                            width={60}
                            className=' aspect-square'
                        />
                        <div>
                            <p className='text-base font-black text-[19px] f-1'>Member</p>
                            <p className='f-1 text-[28px] font-black'>NINJAS</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoDiamondOutline size={60} />
                        <div>
                            <p className='text-base font-black text-[19px] f-1'>WIN TIME</p>
                            <p className='f-1 text-[28px] font-black'>05</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <GiCrownedSkull size={60} />
                        <div>
                            <p className='text-base font-black text-[19px] f-1'>HARD MAN</p>
                            <p className='f-1 text-[28px] font-black'>11</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <LiaGamepadSolid size={60} />
                        <div>
                            <p className='text-base font-black text-[19px] f-1'>BEST GAME</p>
                            <p className='f-1 text-[28px] font-black'>PUBG MOBILE</p>
                        </div>
                    </div>


                </div>
            </section>
        </section>
    )
}
