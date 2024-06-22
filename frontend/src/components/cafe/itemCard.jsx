import React from 'react'
import { FaPlus } from "react-icons/fa6";

const itemCard = () => {
    return (
        <div className='flex gap-4'>
            <div className='flex justify-end'>
                <div>
                    <FaPlus />
                </div>
            </div>
            <div className='flex'>
                <img src="" alt="" />
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default itemCard