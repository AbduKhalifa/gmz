

import React from 'react'
import styles from "./call.player.module.css";
import { MdAdd } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";


export default function CallPlayer() {
    return (
        <section className={styles.call_player + " p-4 flex items-center gap-2"}>
            <div className='bg-base f-1 relative hover:top-[-8px] top-0'>
                <button className='flex gap-2 items-center p-2 text-[16px] text-helper hover:text-white'>
                    To Clan <MdAdd size={22} />
                </button>
            </div>
            <div className='bg-base f-1 relative hover:top-[-8px] top-0'>
                <button className='flex gap-2 items-center p-2 text-[16px] text-helper hover:text-white'>
                    Send Message <RiSendPlaneFill  size={22} />
                </button>
            </div>
        </section>
    )
}
