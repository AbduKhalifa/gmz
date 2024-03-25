


import React, { useRef, useState } from 'react'
import { domain } from '../../../vars/var';

export default function Member({ memberData }) {

    const tagTitle = useRef(null);
    const [showTagTitle, setShowTagTitle] = useState(false);
    const [bottomLineWidth, setBottomLineWidth] = useState(0);

    return (
        <div
            className=' bg-gray rounded-lg p-4 flex justify-center items-center flex-col cursor-pointer relative overflow-hidden'
            onMouseEnter={() => setBottomLineWidth(100)}
            onMouseLeave={() => setBottomLineWidth(0)}
        >
            <div className='w-[120px]'>
                <img
                    className='rounded-full aspect-square object-cover'
                    src={domain + memberData.avatars[0].path}
                    alt="" />
            </div>
            <div className='py-4'>
                <h5 className='font-black f-1 text-[22px] text-center flex items-center gap-2'>
                    {memberData.nickname}
                    {
                        memberData ?
                            <div
                                className='relative '

                            >
                                <img
                                    width={30}
                                    src={require(`./../../../assets/images/icons/${"old_member"}.png`)}
                                    alt=""
                                    onMouseEnter={() => {
                                        setShowTagTitle(true)
                                    }}
                                    onMouseLeave={() => {
                                        setShowTagTitle(false)
                                    }}
                                />
                                <span
                                    ref={tagTitle}
                                    className={(showTagTitle ? " opacity-1 " : " opacity-0 ") + ` duration-[250ms]  absolute -top-1 translate-y-[-105%] translate-x-[-50%] left-[50%] text-[12px] bg-[#0b0e137a] p-1 px-3 rounded-full`}
                                >
                                    {"title"}
                                </span>
                            </div>
                            :
                            null
                    }
                </h5>
            </div>
            <i className={` duration-[250ms] absolute bottom-0 left-0 h-[6px] bg-base `} style={{ width: bottomLineWidth + "%", }}></i>
        </div>
    )
}
