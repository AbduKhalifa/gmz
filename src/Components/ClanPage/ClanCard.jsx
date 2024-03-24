


import React from 'react';
import styles from "./clans.module.css";
import { domain } from '../../vars/var';

export default function ClanCard({ clanData }) {
    console.log(clanData);
    return (
        <div className={styles.clan_card + ' relative z-10 cursor-pointer m-auto sm:m-0'}>
            <div className='relative top-0 left-0 w-[80%] m-auto '>
                <div className=' overflow-hidden rounded-[13px]'>
                    <img src={domain + clanData.avatars[0].path} alt="" className=' w-full rounded-[13px]' />
                </div>
                <div className={styles.clan_logo + ' p-2 absolute bottom-0 left-0 bg-helperH rounded-full translate-y-[50%] shadow-xl'}>
                    <div className='bg-helper rounded-full p-4 '>
                        <img src={domain + clanData.logos[0].logoPath} alt="" width={60} className=' aspect-square' />
                    </div>
                </div>
            </div>
            <div className='pt-[108px] relative top-[-54px] left-0 border-[1px] border-white px-6 pb-3  w-full -z-10 rounded-[16px]'>
                <p className='f-1 text-[26px]'> {clanData.name} </p>
                <span className='text-text'>{clanData.clansRankView.rankTitle}</span>
            </div>
        </div>
    )
}
