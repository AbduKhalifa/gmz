

import React from 'react'
import background from "./../../assets/shop_bg.jpg"

export default function ShopIntro() {
    return (
        <div
            className=' bg-center bg-cover flex justify-between items-center px-6 sm:px-12 lg:px-24 xl:px-44 py-12'
            style={{ backgroundImage: `url(${background})` }}
        >
            <h1 className='f-1 text-[40px] md:text-[60px] leading-8'>GMZ Shop</h1>
            <div className=' h-full'>
                <img
                    className='w-[240px] md:w-[320px]'
                    src={require("./../../assets/shop_intro.png")}
                    alt="helmet" />
            </div>
        </div>
    )
}
