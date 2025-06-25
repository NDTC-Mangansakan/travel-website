import { RiArrowRightLine } from '@remixicon/react'
import { useEffect } from 'react'
import baseReveal from '../components/ScrollReveal'

const Contact = () => {

  useEffect(() => {
    baseReveal.reveal('.contact-text', { origin: 'left' })
    baseReveal.reveal('.contact-img', { origin: 'right' })
  })
  return (
    <section id='contact' className='py-15 px-[5%] lg:px-[10%]'>
        <div className="flex flex-col max-w-[475px] gap-10 mx-auto lg:flex-row lg:max-w-[1024px]">
            {/* Item 1 */}
              <div className="contact-text p-10 text-center lg:text-start lg:w-1/2 ">
                <p className="text-3xl font-bold lg:text-start xs:text-5xl">Your Journey <br />Starts Here</p>
                <p className="mt-5 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad officiis quos, blanditiis nisi laboriosam!</p>
                <input type="text" placeholder='Enter Your Email' className="mt-10 px-5 py-3 text-white bg-gray-700 w-full xs:w-80" />
                <button className='flex items-center justify-center gap-x-5 mt-5 px-5 py-3 bg-black text-white w-full xs:w-80 mx-auto cursor-pointer lg:mx-0'>Join Our Newsletter<RiArrowRightLine/></button>
              </div>

            {/* Item 2 */}
            <div className="contact-img overflow-hidden rounded-3xl lg:w-1/2">
                <img src="./src/assets/img/join-img.png" alt="" className='rounded-3xl w-full h-full object-cover transition-transform duration-200 hover:scale-110'/>
            </div>
        </div>
    </section>
  )
}

export default Contact