import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import CafeCard from './CafeCard';

const Root = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        fetch("http://localhost:4000/api/cafes", requestOptions)
            .then(async (response) => { const data = await response.json(); setData(data); })
            .catch((error) => console.error(error));
    }, [])


    return (
        <div className='w-screen sm:min-h-screen justify-center items-center flex'>
            <div className='mt-[100px] flex-col flex gap-4 w-11/12 justify-center items-center'>
                <p className='text-[#003B40] font-semibold tracking-wider text-2xl'>
                    Find a coffee shop anywhere
                </p>
                <div className='flex gap-4 justify-center items-center w-4/12 min-w-[300px]'>
                    <div className='flex items-center px-2 py-2 gap-4 bg-[#EDF0EF] rounded-xl'>
                        <IoSearchOutline />
                        <input type="text" placeholder='Looking for cafe?' className='bg-transparent outline-none' />
                    </div>
                    <div className='bg-[#003B40] p-2 text-white rounded-xl text-lg'>
                        <LuSettings2 />
                    </div>
                </div>
                <div className='w-full flex flex-wrap gap-8 justify-center'>
                    {(data != undefined) ?
                        data.map((items) => {
                            console.log(items)
                            return <CafeCard key={items.id} items={items} />
                        }) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Root