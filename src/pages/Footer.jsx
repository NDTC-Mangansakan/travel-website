import { RiFacebookCircleFill, RiInstagramFill, RiInstallFill, RiTwitterXFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-15 px-[5%] lg:px-[10%]'>
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-6 lg:gap-0">
                {/* Item 1 */}
                <div className="col-span-2 font-bold text-xl">Go Travel</div>

                {/* Item 2 */}
                <div>
                    <p className="font-bold">About</p>
                    <div className="mt-3 flex flex-col gap-y-1">
                        <a href="#">About Us</a>
                        <a href="#">Features</a>
                        <a href="#">News and Blogs</a>
                    </div>
                </div>

                {/* Item 3 */}
                <div>
                    <p className="font-bold">Contact</p>
                    <div className="mt-3 flex flex-col gap-y-1">
                        <a href="#">Call Center</a>
                        <a href="#">Support</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>

                {/* Item 4 */}
                <div>
                    <p className="font-bold">Support</p>
                    <div className="mt-3 flex flex-col gap-y-1">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Services</a>
                        <a href="#">Payments</a>
                    </div>
                </div>

                {/* Item 5 */}
                <div>
                    <p className="font-bold">Contact</p>
                    <div className="mt-3 flex gap-x-3">
                        <a href="#"><RiFacebookCircleFill/></a>
                        <a href="#"><RiInstagramFill/></a>
                        <a href="#"><RiTwitterXFill/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer