


import React from 'react';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className='bg-helperH'>
            <section className=''>
                <div className=' flex justify-between '>
                    <div className='  grow border-[1px] border-t-base h-full'></div>
                    <h1 className={styles.logo + ' bg-helper py-2 px-4 sm:px-6 md:px-8'}>
                        <img src={require("./../../../../assets/logo-white.png")} alt="" width={120} />
                    </h1>
                    <div className=' grow border-[1px] border-t-base h-full '></div>
                </div>
                <div>

                </div>
            </section>
        </footer>
    )
}
