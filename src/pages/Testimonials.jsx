import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import baseReveal from '../components/ScrollReveal';

const Testimonials = () => {

  useEffect(() => {
    baseReveal.reveal('.testimonials', {origin:'bottom'})
  })
  return (
    <section id='testimonials' className='py-15 px-[5%] lg:px-[10%]'>
      <p className="section-title">What Are <br />They Saying?</p>

      <div className="testimonials h-[400px] mt-10 flex flex-col max-w-[475px] mx-auto lg:flex-row lg:max-w-[1024px]">

        {/* Item 1 */}
        <div className="relative h-1/2 rounded-t-3xl lg:h-full lg:w-2/3 lg:rounded-none lg:rounded-l-3xl overflow-hidden">
          <img
            src="./src/assets/img/testimonial-img.png"
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Item 2 */}
        <div className="h-1/2 lg:h-full lg:w-1/3">
          <Swiper
            modules={[Autoplay, Pagination]}
            className='max-w-[475px] mx-auto h-full overflow-hidden rounded-b-3xl lg:rounded-none lg:rounded-r-3xl'
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // 3 seconds
              pauseOnMouseEnter: true, // Pause autoplay on mouse enter
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              475:{
                slidesPerView: 2,
              },
              1024:{
                slidesPerView: 1,
                spaceBetween: 0,
              }
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide className='bg-gray-200 !flex !flex-col !px-4 xs:!justify-center lg:text-center'>
              <p className="text-black font-bold text-xl mt-5 xs:mt-0 lg:text-2xl lg:mt-0">Ama Dablam</p>
              <p className="mt-2 text-gray-500 text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates soluta, voluptate iste quos nostrum dolores!</p>
              <div className="mt-3 flex items-center gap-x-3 lg:justify-center lg:flex-col lg:gap-y-3">
                <img src="./src/assets/img/testimonial-profile-1.png" alt="" className='w-10 rounded-full lg:w-20' />
                <div>
                  <p className="text-black font-bold lg:text-lg">Will</p>
                  <p className="text-sm text-gray-500 lg:text-base">Photographer</p>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Slide 2 */}
            <SwiperSlide className='bg-gray-200 !flex !flex-col !px-4 xs:!justify-center lg:text-center'>
              <p className="text-black font-bold text-xl mt-5 xs:mt-0 lg:text-2xl lg:mt-0">Mount Fuji</p>
              <p className="mt-2 text-gray-500 text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates soluta, voluptate iste quos nostrum dolores!</p>
              <div className="mt-3 flex items-center gap-x-3 lg:justify-center lg:flex-col lg:gap-y-3">
                <img src="./src/assets/img/testimonial-profile-2.png" alt="" className='w-10 rounded-full lg:w-20' />
                <div>
                  <p className="text-black font-bold lg:text-lg">Rose</p>
                  <p className="text-sm text-gray-500 lg:text-base">Influencer</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className='bg-gray-200 !flex !flex-col !px-4 xs:!justify-center lg:text-center'>
              <p className="text-black font-bold text-xl mt-5 xs:mt-0 lg:text-2xl lg:mt-0">Nanga Parbat</p>
              <p className="mt-2 text-gray-500 text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates soluta, voluptate iste quos nostrum dolores!</p>
              <div className="mt-3 flex items-center gap-x-3 lg:justify-center lg:flex-col lg:gap-y-3">
                <img src="./src/assets/img/testimonial-profile-3.png" alt="" className='w-10 rounded-full lg:w-20' />
                <div>
                  <p className="text-black font-bold lg:text-lg">Gian</p>
                  <p className="text-sm text-gray-500 lg:text-base">Blogger</p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials