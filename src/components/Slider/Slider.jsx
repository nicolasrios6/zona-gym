import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.scss";
import { Autoplay, Pagination, Navigation } from "swiper";



const Slider = () => {
    return (
        <>
           <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
           >
                <SwiperSlide className='slide'><img src='./gimnasio.jpeg' alt=''/></SwiperSlide>
                <SwiperSlide className='slide'><img src='./gimnasio.jpeg' alt=''/></SwiperSlide>
                <SwiperSlide className='slide'><img src='./gimnasio.jpeg' alt=''/></SwiperSlide>
           </Swiper>
        </>
    )
}

export default Slider