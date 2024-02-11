import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function OptionTitle({ className, children }) {
    return (
        <div className={className + ' flex items-center gap-1 f-1 text-xl font-black p-3 border-[1px] border-[#26292c]'}>
            <IoMdArrowDropright size={26} className='text-base' />
            {children}
        </div>
    )
}
