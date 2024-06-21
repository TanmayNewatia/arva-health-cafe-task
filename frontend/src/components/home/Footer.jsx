import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center w-screen flex-col gap-4 bg-[#EDF0EF] pt-[25px] tracking-wide font-medium text-lg'>
            <div className="flex justify-evenly w-11/12">
                <div>
                    <img src="/logo.png" alt="Cafe" className='w-[75px]' />
                    <a href="https://www.google.co.in/maps/place/MG+ROAD+METRO+STATION/@12.9756295,77.6040478,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17005c679be5:0x7fe614760a22fc8e!8m2!3d12.9756295!4d77.6066227!16s%2Fg%2F11v_9gwhsj?entry=ttu">
                        <p className='text-sm flex flex-col'><span className='font-semibold'>Address:</span>
                            <span>MG Road,</span>
                            <span>Opposite MG Road Metro Station,</span>
                            <span>Bengaluru, Karnataka 560001,</span>
                            <span>India</span>
                        </p>
                    </a>
                </div>
                <ul>
                    <li className='!font-semibold text-[#003B40] text-xl'>
                        Company
                    </li>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Team</li>
                </ul>
                <div className='flex flex-col gap-4'>
                    <ul>
                        <li className='font-semibold text-[#003B40]'>
                            Contact Us
                        </li>
                        <li>Help & Support</li>
                    </ul>
                    <ul>
                        <li className='font-semibold text-[#003B40]'>
                            Legal
                        </li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <ul>
                    <li className='font-semibold text-[#003B40]'>
                        Cities we serve:
                    </li>
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                </ul>
            </div>
            <div className='border-t-2 w-screen border-black flex justify-center items-center'>
                <p className='text-sm py-4'>© 2024 Cafe. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer