


import React from 'react'
import styles from "./clans.module.css";

export default function Advice() {
    return (
        <section className='py-20 px-4 sm:px-6 md:px-16 lg:px-24'>
            <h4 className='text-[32px] font-black f-1 text-base'> Why should you join a clan </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 gap-y-12'>
                <article>
                    <p className='text-text text-[20px] fonto-semibold'>
                        By joining clans, you can make friends around the world and then compete with other clans and win against the rival.
                        You can earn some money by winning competitions and tournaments held by one of the players on the site or one of the site administrators.
                        There is a special section for challenges, so if you are not part of a clan, this section will not be useful to you.
                    </p>
                </article>
                <div className='flex justify-center'>
                    <img
                        src={require("./../../assets/clan-section.png")}
                        className='w-full max-w-[380px]'
                        alt="avatar man" />
                </div>
            </div>
        </section>
    )
}
