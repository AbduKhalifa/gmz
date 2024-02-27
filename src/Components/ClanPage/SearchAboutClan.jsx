


import React, { useRef } from 'react';
import masked_bg from "./../../assets/masked-bg.png";
import styles from "./clans.module.css";

export default function SearchAboutClan() {

    const search_input = useRef(null);

    function handleSearchInput() {
        search_input.current.classList.toggle(styles.focus);
    }
    const data = "5"
    return (
        <section className='py-24'
            style={{
                backgroundImage: `url(${masked_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}

        >
            <div className='flex justify-center'>
                <div
                    ref={search_input}
                    className={'m-auto w-[90%] sm:w-[50%] flex gap-4 bg-helper p-4 items-center ' + styles.search_input}
                >
                    <span className='text-text'>#</span>
                    <div className='flex-grow'>
                        <input
                            onFocus={handleSearchInput}
                            onBlur={handleSearchInput}
                            type="text"
                            placeholder='Search about clan by hash'
                            className='p-2 outline-none  bg-[#00000000] text-text w-full'
                        />
                    </div>
                    <button className='bg-base py-2 px-4 font-black rounded-md text-black hover:bg-yellow f-1'> SEARCH </button>
                </div>
            </div>
            <div className='py-12 px-4 sm:px-6 md:px-16 lg:px-24'>
                <div className='grid grid-cols-4'>
                    <div className={styles.clan_card +  ' relative z-10 cursor-pointer '}>
                        <div className='relative top-0 left-0 w-[80%] m-auto '>
                            <img src={require("./../../assets/top-clans.png")} alt="" className=' w-full rounded-[13px]' />
                            <div className={styles.clan_logo + ' p-2 absolute bottom-0 left-0 bg-helperH rounded-full translate-y-[50%]'}>
                                <div className='bg-helper rounded-full p-4'>
                                    <img src={require("./../../assets/team_vs02.png")} alt="" width={60} className=' aspect-square' />
                                </div>
                            </div>
                        </div>
                        <div className='pt-[108px] relative top-[-54px] left-0 border-[1px] border-white px-6 pb-3  w-full -z-10 rounded-[16px]'>
                            <p className='f-1 text-[26px]'> NINJAS </p>
                            <span className='text-text'>Conquer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
