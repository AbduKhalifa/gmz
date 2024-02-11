


import React from 'react'
import OptionTitle from './OptionTitle'
import OptionContent from './OptionContent'

export default function ShopOption({ className, children }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

ShopOption.OptionTitle = OptionTitle;
ShopOption.OptionContent = OptionContent;
