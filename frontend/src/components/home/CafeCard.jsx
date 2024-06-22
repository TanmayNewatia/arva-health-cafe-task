import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const CafeCard = () => {
    return (
        <div>
            <div>
                <div>
                    <FaRegHeart />
                </div>
            </div>
            <div>
                <img src="/assets/cafe.svg" alt="" />
                <div>
                    <p>Home Coffee Roasters</p>
                    <div><p></p></div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default CafeCard