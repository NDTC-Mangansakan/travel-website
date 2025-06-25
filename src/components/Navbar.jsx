import { RiCloseLine, RiGalleryView2, RiMoonFill, RiSunFill } from '@remixicon/react';
import React, { useEffect } from 'react'

const Navbar = () => {

    const [openNav, setOpenNav] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    }

    useEffect(() => {
        const handleNavLinkCss = () => {
            const links = document.querySelectorAll('.link')
            const screenY = Math.ceil(window.scrollY)
            console.log(screenY, links)

            links.forEach(link => {
                // Home link
                if(screenY < 370 && link.textContent.includes('Home')){
                    link.classList.toggle('active-link')
                }
                else if (screenY >= 370 && link.textContent.includes('Destination')) {
                    link.classList.toggle('active-link')
                }
            })
            
        }
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-xl');
            } else {
                navbar.classList.remove('shadow-xl');
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleNavLinkCss);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleNavLinkCss)
        }
    }, [])

    return (
        <nav className='nav-css'>
            <div className="px-[5%] h-[10vh] flex items-center justify-between lg:px-[10%]">
                <a href='/' className="text-xl font-bold flex items-center">
                    GoTravel
                </a>

                {/* For below lg screens */}
                <div className='flex items-center gap-x-3 lg:hidden'>
                    <span className='cursor-pointer' onClick={toggleDarkMode}>
                        {isDarkMode ? <RiMoonFill size={25} /> : <RiSunFill size={25} />}
                    </span>
                    <span className="cursor-pointer" onClick={() => setOpenNav(prev => !prev)}>
                        <RiGalleryView2 size={25} />
                    </span>
                </div>

                <div className={`link-container fixed ${openNav ? 'top-0' : '-top-[300px]'} left-0 right-0 h-[300px] flex flex-col items-center justify-center gap-y-5 font-semibold bg-white rounded-b-3xl dark:bg-gray-800 transition-all duration-300 lg:hidden`}>
                    <a href="#home" className='link' onClick={() => setOpenNav(prev => !prev)}>Home</a>
                    <a href="#destination" className='link' onClick={() => setOpenNav(prev => !prev)}>Destination</a>
                    <a href="#testimonials" className='link' onClick={() => setOpenNav(prev => !prev)}>testimonials</a>
                    <a href="#gallery" className='link' onClick={() => setOpenNav(prev => !prev)}>Gallery</a>
                    <a href="#contact" className='link' onClick={() => setOpenNav(prev => !prev)}>Contact</a>
                    <span className='cursor-pointer' onClick={toggleDarkMode}>
                        {isDarkMode ? <RiMoonFill size={30} /> : <RiSunFill size={30} />}
                    </span>
                    <span className="cursor-pointer absolute top-5 right-5" onClick={() => setOpenNav(prev => !prev)}>
                        <RiCloseLine size={30} />
                    </span>
                </div>

                {/* For lg and above screens */}
                <div className="hidden lg:flex items-center gap-x-8 font-semibold">
                    <a href="#home" className='link active-link'>Home</a>
                    <a href="#destination" className='link'>Destination</a>
                    <a href="#testimonials" className='link'>Testimonials</a>
                    <a href="#gallery" className='link'>Gallery</a>
                    <a href="#contact" className='link'>Contact</a>
                    <span className='cursor-pointer' onClick={toggleDarkMode}>
                        {isDarkMode ? <RiMoonFill size={30} /> : <RiSunFill size={30} />}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar