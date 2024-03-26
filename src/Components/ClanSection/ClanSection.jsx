


import React, { useEffect, useState } from 'react';

import styles from "./clanSection.module.css";

import overlayBackground from "./../../assets/images/sections/clan_page_overlay.png";
import ClanDefinition from './Children/ClanDefinition';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { domain } from '../../vars/var';
import { useSelector } from 'react-redux';
import { FaLock } from "react-icons/fa";
import Member from './Children/Member';
import MemberSection from './Children/MemberSection';


export default function ClanSection() {

    const current_user = useSelector(rdcrs => rdcrs.uReducer);
    const primaryKeyOfClan = useParams().id;

    const { id: clanId } = useParams();
    const [clanData, setClanData] = useState(null);
    const [showing, setShowing] = useState("home");
    const [members, setMembers] = useState(null);
    const [hisClan, setHisClan] = useState(false);


    async function getClanData(id) {
        const endpoint = `/clan/${id}?userId=${current_user.id}`
        try {
            const { data } = await axios.get(domain + endpoint);
            setClanData(data.result);
            setMembers(data.result.members);
            setHisClan(data.result.userAtClan)
        } catch (error) {
            console.error("Error fetch clan");
            console.log(error);
        }
    }

    useEffect(() => {
        getClanData(clanId);
    }, []);

    return (
        <section
            style={{ backgroundImage: `url('${overlayBackground}')`, backgroundSize: "cover" }}
            className='relative px-6 sm:px-10 md:px-12 lg:px-14 xl:px-24 py-8 min-h-screen z-10'
        >
            <div className=' absolute bottom-0 left-0 bg-[#121b24e6] w-full h-full -z-10'></div>
            <section className=' z-10'>
                {clanData ? <ClanDefinition data={clanData} displayHandle={setShowing} currentSection={showing} /> : null}
                {
                    clanData && clanData.clan.private && !hisClan ? <div className='mt-12 p-12 md:p-24 bg-gray rounded-xl flex flex-col items-center justify-center gap-6 text-text'>
                        <h4 className='text-[38px] font-black f-1 uppercase' > This clan is private {hisClan + " s"}</h4>
                        <FaLock size={112} />
                    </div>
                        :
                        showing == "home" ?
                            "home "
                            :
                            <>
                                <span className='block mt-12  text-text text-[18px] text-center f-1 uppercase'> {members.length} / {clanData.clan.maxMembers} <span className='text-[14px] font-bold f-1'>members</span></span>
                                <MemberSection members={members} />
                            </>

                }
            </section>
        </section>
    )
}
