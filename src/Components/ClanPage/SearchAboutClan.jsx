


import React, { useRef } from 'react';
import masked_bg from "./../../assets/masked-bg.png";
import styles from "./clans.module.css";
import ClanCard from './ClanCard';

export default function SearchAboutClan({ randomClans }) {

    const search_input = useRef(null);

    function handleSearchInputActivity() {
        search_input.current.classList.toggle(styles.focus);
    }

    return (
        <section className='py-24'
            style={{
                backgroundImage: `url(${masked_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "top center ",
                backgroundRepeat: "no-repeat"
            }}

        >
            <div className='flex justify-center'>
                <div
                    ref={search_input}
                    className={'m-auto w-[90%] sm:w-[50%] flex gap-4 bg-helper p-2 sm:p-4 items-center cursor-text ' + styles.search_input}
                    onClick={() => {
                        const inputChild = search_input.current.childNodes[1].childNodes[0];
                        inputChild.focus();
                    }}
                >
                    <span className='text-text'>#</span>
                    <div className='flex-grow'>
                        <input
                            onFocus={handleSearchInputActivity}
                            onBlur={handleSearchInputActivity}
                            type="text"
                            placeholder='Clan hash'
                            className=' p-2 outline-none  bg-[#00000000] text-text w-full'
                        />
                    </div>
                    <button className='bg-base py-2 px-4 font-black rounded-md text-black hover:bg-yellow f-1'> SEARCH </button>
                </div>
            </div>
            <div className='py-12 px-4 sm:px-6 md:px-16 lg:px-24'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:gap-12'>
                    {
                        randomClans?.map((clan, idx) => {
                            return <ClanCard clanData={clan} key={clan.id} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}
