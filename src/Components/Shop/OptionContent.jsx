

import React from 'react'

export default function OptionContent({ className, children }) {
    return (
        <div className={className + ' bg-helperH p-3 border-[1px] border-[#26292c]'}>
            {children}
        </div>
    )
}
