


import React, { useState } from 'react';
import styles from "./trending.module.css";

import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { domain } from '../../../../vars/var';

export default function Trending({ trends }) {

    // const [like, setLike] = useState(false);

    function formatDate(date) {
        const ISODate = new Date(date);
        const day = String(ISODate.getDate()).padStart(2, "0");
        const month = String((ISODate.getMonth() + 1)).padStart(2, "0");
        const year = ISODate.getFullYear();
        return `${year}-${month}-${day}`
    }

    return (
        <section className='px-6 md:px-12 lg:px-16 xl:px-24'>
            <h2 className='f-1 text-[44px] font-black mc'>Trending</h2>
            <section className='py-12'>
                <div className={styles.articles + " "}>
                    {
                        trends ?
                            trends.map((trend, indexTrend) => {
                                return <div className=' mb-12' key={indexTrend}>
                                    <article className=' grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center sm:place-items-start'>

                                        <div className='flex items-center h-full w-full'>
                                            <div className=' flex flex-col justify-center grow w-full'>
                                                <h2 className='w-full text-left text-[18px] text-text font-black f-1 cursor-pointer'>
                                                    <span className='text-[12px]'>{trend.User.role.toUpperCase()}</span>
                                                    <span className='text-base'>&nbsp;@&nbsp;</span>
                                                    {trend.User.nickname}
                                                </h2>
                                                <span className='w-full h-[1px] bg-[#313131] mt-[4px]'></span>
                                                <p className='py-2 text-text text-[14px]'>
                                                    {trend.desc}
                                                </p>
                                                <span className='w-full h-[1px] bg-[#313131] mt-[4px]'></span>
                                                <div
                                                    className={
                                                        indexTrend % 2 != 0 ?
                                                            ' py-2 px-4 flex justify-between w-full'
                                                            :
                                                            ' py-2 px-4 flex justify-between flex-row-reverse w-full'
                                                    }

                                                >
                                                    <div className={
                                                        indexTrend % 2 == 0 ?
                                                            'flex  gap-6 flex-row-reverse text-text'
                                                            :
                                                            'flex  gap-6 text-text'
                                                    }>
                                                        <div className='flex gap-2 items-center cursor-pointer hover:text-base duration-[250ms]'>
                                                            <span className='text-[14px] font-semibold'>{trend.likeCount}</span>
                                                            <BiSolidLike size={20} />
                                                        </div>
                                                        <div className='flex gap-2 items-center cursor-pointer hover:text-base duration-[250ms]'>
                                                            <span className='text-[14px] font-semibold'>{trend.dislikeCount}</span>
                                                            <BiSolidDislike size={20} />
                                                        </div>
                                                    </div>
                                                    <div className='  font-semibold'>
                                                        <p className='text-text text-[14px]'>{formatDate(trend.updatedAt)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center w-full'>
                                            <div className=' max-w-[400px]'>
                                                < img className='max-w-full' src={domain + trend.image} alt="" />
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            })
                            :
                            null
                    }

                </div>

            </section>
        </section >
    )
}
