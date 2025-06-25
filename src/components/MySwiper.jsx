import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const MySwiper = () => {
    return (
        <Swiper
            className='w-100 border'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='h-[300px] flex items-center justify-center'>
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ height: '300px', background: '#d0d0d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{ height: '300px', background: '#c0c0c0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Slide 4
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;