import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const CafeCard = () => {
    return (
        <div className='w-[250px]'>
            <div className='flex justify-end'>
                <div className='bg-[#ffffff] p-2 rounded-full absolute w-[40px] h-[40px] -mt-[10px] -mr-[10px] flex justify-center items-center'>
                    <div className='bg-[#EDF0EF] text-[#003B40] p-2 rounded-full absolute w-[35px] h-[35px] flex justify-center items-center'>
                        <FaRegHeart />
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/cafe.svg" alt="" className='w-[250px]' />
                <div>
                    <p className='text-[#003B40] font-bold tracking-wider'>Home Coffee Roasters</p>
                    <div className='text-md flex items-center gap-2'><img src="/assets/star.svg" alt="star" className='w-[15px] h-[15px]' /><span>4.5</span><p className='text-[#B7C1C2]'>1,200 reviews</p></div>
                    <p className='text-[#003B40] text-sm font-medium tracking-widest'>3.8 miles</p>
                </div>
            </div>
        </div>
    )
}

export default CafeCard