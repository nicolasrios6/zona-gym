import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.scss";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({slide1, slide2, slide3}) => {
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
                <SwiperSlide className='slide'><img src={`../../${slide1}`} alt=''/></SwiperSlide>
                <SwiperSlide className='slide'><img src={`../../${slide2}`} alt=''/></SwiperSlide>
                <SwiperSlide className='slide'><img src={`../../${slide3}`} alt=''/></SwiperSlide>
           </Swiper>
        </>
    )
}

export default Slider