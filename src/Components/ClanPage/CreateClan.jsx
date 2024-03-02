

import React from 'react';
import styles from "./clans.module.css";


export default function CreateClan() {
    return (
        <div className='sm:py-24  px-4 sm:px-6 md:px-16 lg:px-24'>
            <div>
                <h4 className='f-1 text-[32px] text-base mb-8'> ESTABLISH A CLAN  </h4>
                <article className='grid grid-cols-1 md:grid-cols-2  gap-12'>
                    <div>
                        <p className=' text-[17px] sm:text-[20px] text-text sm:leading-10 sm:pt-8 font-normal'>
                            You can create a clan, gather players, engage in violent
                            competitions against other clans, and win challenge rounds.
                            Try to gather the strongest players so that your probability of winning the matches will be high.
                            Soon the feature of purchasing an existing clan will be added
                        </p>
                    </div>
                    <div className=''>
                        <div className='w-full justify-center items-center'>
                            <img className=" w-[300px] m-auto" src={require("./../../assets/images/banner5.png")} alt="" />
                        </div>
                    </div>
                </article>
                <div className='pt-24 text-center'>
                    <button className={styles.create_clan_button + " bg-base w-[200px] sm:w-[300px] py-3 "}>
                        <span className='f-1 text-black'>WON A CLAN</span>
                        <i></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
