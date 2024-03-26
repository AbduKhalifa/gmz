


import React from 'react'
import Member from './Member'

export default function ({ members }) {
    console.log(members);
    return (
        <div className="mt-4">
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                {
                    members.map((mem, memIndex) => {
                        return <Member key={memIndex} memberData={mem} />
                    })
                }
            </div>
        </div>
    )
}
