


import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./profile.module.css";
import { IoDiamondOutline } from "react-icons/io5";
import { GiCrownedSkull } from "react-icons/gi";
import { LiaGamepadSolid } from "react-icons/lia";
import CallPlayer from './CallPlayer/CallPlayer';
import { domain } from '../../vars/var';


export default function Profile() {

    const userData = useSelector(rds => rds.uReducer);

    return (
        <section>
            <CallPlayer />
            <section className=' p-6 lg:p-12 flex gap-8 sm:flex-row flex-col'>
                <div className=' bg-[#1C242F] rounded-xl py-6 w-[100%] m-auto sm:w-[325px] max-w-[325px] relative overflow-hidden sm:m-0 h-min'>
                    <div className={styles.card + ' px-12 relative'}>
                        <span className={styles.rightLine}></span>
                        <span className={styles.leftLine}></span>
                        <div className=' overflow-hidden rounded-full z-10 relative  border-[4px] border-base'>

                            <img
                                src={domain+userData.image}
                                alt=" avatar "
                                className=' aspect-square object-cover object-center w-full'
                            />
                        </div>
                        <div className='pt-4 flex flex-col items-center'>
                            <h3 className=' font-black text-[24px]'> {userData.nickname} </h3>
                            <p className=' text-base text-[18px] font-black'> {userData.role.toUpperCase()} </p>
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
                            <div className='md:px-3 grid  gap-12 mb-2'>
                                <div className='flex gap-4 md:gap-12 flex-wrap justify-between md:justify-start'>
                                    <div>
                                        <p className='text-[14px] f-1 text-base flex items-center gap-2'>
                                            Experinences
                                            <img
                                                width={25}
                                                src={require("./../../assets/exp.png")}
                                                alt="Crystal Shards"
                                            />
                                        </p>
                                        <span className='  f-1 text-text'> 5179.54 exp</span>
                                    </div>
                                    <div>
                                        <p className='text-[14px] f-1 text-base flex items-center gap-2'>
                                            Crystal Shards
                                            <img
                                                width={20}
                                                src={require("./../../assets/CS.png")}
                                                alt="Crystal Shards"
                                            />
                                        </p>
                                        <span className='  f-1 text-text'> 794</span>
                                    </div>
                                    <div>
                                        <p className='text-[14px] f-1 text-base flex items-center gap-2'>
                                            Level
                                            <img
                                                width={20}
                                                src={require("./../../assets/lvl.png")}
                                                alt="Crystal Shards"
                                            />
                                        </p>
                                        <span className='  f-1 text-text'> 18</span>
                                    </div>
                                    <div>
                                        <p className='text-[14px] f-1 text-base flex items-center gap-2'>
                                            Rank
                                            <img
                                                width={20}
                                                src={require("./../../assets/badage.png")}
                                                alt="Crystal Shards"
                                            />
                                        </p>
                                        <span className='  f-1 text-text'> SILVER </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className=''>
                        <div className=''>
                            <h4 className='font-extrabold text-base mb-2 ' style={{ fontSize: "22px" }}>
                                Gaming Skills
                            </h4>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className=' lg:col-span-1 col-span-2 flex flex-col gap-6'>
                                    <div>
                                        <p className='f-1'>Survival</p>
                                        <div className='bg-helperH'>
                                            <span className={styles.prograss + " "} style={{ width: "60%" }}>

                                                <i className=' text-[10px]'>45</i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className=' f-1'>Tactics</p>
                                        <div className='bg-helperH'>
                                            <span className={styles.prograss + " "} style={{ width: "20%" }}>

                                                <i className=' text-[10px]'>45</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' lg:col-span-1 col-span-2 flex flex-col gap-6'>
                                    <div>
                                        <p className='f-1'>Shooter</p>
                                        <div className='bg-helperH'>
                                            <span className={styles.prograss + " "} style={{ width: "14%" }}>

                                                <i className=' text-[10px]'>45</i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className=' f-1'>Zombie</p>
                                        <div className='bg-helperH'>
                                            <span className={styles.prograss + " "} style={{ width: "90%" }}>

                                                <i className=' text-[10px]'>45</i>
                                            </span>
                                        </div>
                                    </div>
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
