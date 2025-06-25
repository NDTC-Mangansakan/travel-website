import { RiArrowRightLine } from '@remixicon/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';
import baseReveal from '../components/ScrollReveal';
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = () => {

  useEffect(() => {
    baseReveal.reveal('.home-content', {origin: 'left'})
    baseReveal.reveal('.home-swiper', { origin: 'right' })
  })
  

  return (
    <section id='home' className='mt-[10vh] py-10 h-[90vh] px-[5%] lg:px-[10%]'>
      <div className="h-full flex flex-col lg:flex-row justify-center lg:items-center">
        {/* Home conetnt */}
        <div className="home-content lg:w-1/2 text-center relative z-1 lg:text-start">
          <p className="font-bold text-4xl text-white md:text-5xl lg:text-6xl">TRAVEL <br />AROUND <br />THE WORLD</p>
          <p className="w-full mx-auto mt-3 text-white sm:w-100 lg:mx-0 lg:text-lg lg:w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum libero fugiat dolores distinctio possimus voluptas eligendi voluptate explicabo perferendis quibusdam.</p>
          <div className="flex justify-center mt-5 lg:justify-start">
            <button className="rounded-lg px-5 py-3 text-white flex items-center gap-x-5 bg-black/40 cursor-pointer">Explore The World <RiArrowRightLine /></button>
          </div>
        </div>

        {/* Home swiper */}
        <div className="home-swiper relative z-1 lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination]}
            className='max-w-[475px] mx-auto mt-5 h-[200px] lg:h-[400px] overflow-hidden rounded-3xl'
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3 seconds
              pauseOnMouseEnter: true, // Pause autoplay on mouse enter
            }}
          >
            <SwiperSlide>
              <img src="./src/assets/img/home-img-1.png" alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/img/home-img-2.png" alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/img/home-img-3.png" alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./src/assets/img/home-img-4.png" alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
          </Swiper>  
        </div>
      </div>
      <div className="blur-bg"></div>
    </section>
  )
}

export default Home