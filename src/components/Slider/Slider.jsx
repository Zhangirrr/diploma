import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import s from './Slider.module.scss';

function Slider( { slides = [] }) {
  const [swiper, setSwiper] = useState ();

  // const swipeNext = () => {
  //   swiper.slideNext();
  // }

  // const swipePrev = () => {
  //   swiper.slidePrev();
  // }

  return (
    <div>
      <div className={s.swiperWrapper}>
        <Swiper
          loop
          grabCursor
          className={s.swiper}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {slides.map((elem) => (
            <SwiperSlide>
              {elem.image && (
                <img className={s.slideImage} src={elem.image} alt="promo slide with " />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider;