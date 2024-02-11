


import React from 'react'
import styles from "./shop.module.css"
import { domain } from '../../vars/var'
export default function ProductCard({ title, price, cat, pathImage }) {
    return (
        <div className={styles.productCard + ' p-4 rounded-md max-w-[300px] m-auto h-full'}>
            <div className='mb-5 border-[1px] border-[#26292c]'>
                <img src={domain + pathImage} alt="" />
            </div>
            <div className={styles.line + ' h-[1px] w-full mb-5'}></div>
            <div className='flex justify-between'>
                <div>
                    <p className='f-1 text-[21px]'>{title}</p>
                    <p className='font-semibold text-[16px] text-text'>{cat}</p>
                </div>
                <div>
                    <p className=' text-[21px] f-1' style={{color:"var(--base)"}}>${price}</p>
                </div>
            </div>
        </div>
    )
}
