

import React, { useEffect, useState } from 'react'
import styles from "./../clanSection.module.css";
import { FaPager } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { domain } from '../../../vars/var';



export default function ClanDefinition({ data, displayHandle, currentSection }) {

    const isPrivate = data.clan.private;
    const descrptionClan = data.clan.desc;

    function whatIsActive() {
        if (currentSection == "home") {
            document.getElementById("clan_home").classList.add(styles.active)
            document.getElementById("clan_members").classList.remove(styles.active)
        }
        else {
            document.getElementById("clan_members").classList.add(styles.active)
            document.getElementById("clan_home").classList.remove(styles.active)
        }
    }


    useEffect(() => {
        whatIsActive();
    }, [currentSection]);

    return (
        <div className='bg-helper rounded-xl overflow-hidden'>
            <div className='  px-6 py-6'>
                <div className='flex items-center gap-6'>
                    <div className='min-w-[100px] max-w-[100px]'>
                        <img src={domain + data.clan.avatars[0].path} className='max-w-full aspect-square object-cover rounded-full' alt="" />
                    </div>
                    <div className='grow'>
                        <div className='mb-6'>
                            <h4 className='f-1 text-[26px] font-black'>NINJAS</h4>
                            <div className={styles.clan_tags + ' font-black f-1 text-[14px] flex gap-6'}>
                                <div> {data.members.length} Member </div>
                                {isPrivate ? <div> Private Clan </div> : <div> Public Clan </div>}
                                <div> {data.clan.clansRankView.rankTitle} </div>
                            </div>
                        </div>
                        {
                            descrptionClan.length > 0 ?
                                <div className='py-3 px-4 bg-[#45f88280] rounded-xl font-semibold f-1 text-[14px] '>
                                    {descrptionClan}
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center bg-gray px-6 py-4 gap-8' >
                <div
                    onClick={() => displayHandle("home")}
                    className={'flex items-center  cursor-pointer ' + styles.s}
                    id='clan_home'
                >
                    <FaPager size={22} className='me-2' /> <span className=' uppercase f-1'>home</span>
                    <i ></i>
                </div>
                <div
                    className={'flex items-center  cursor-pointer ' + styles.s}
                    onClick={() => displayHandle("members")}
                    id='clan_members'
                >
                    <MdGroups2 size={22} className='me-2' /> <span className=' uppercase f-1'>Members</span>
                    <i></i>
                </div>
            </div>
        </div>
    )
}
