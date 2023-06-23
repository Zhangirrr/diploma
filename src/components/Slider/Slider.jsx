import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import s from './Slider.module.scss';

import ArrowLeft from '../../images/arrow-left.png';
import ArrowRight from '../../images/arrow-right.png';

function Slider( { slides = [] }) {
  const [swiper, setSwiper] = useState ();

  const swipeNext = () => {
    swiper.slideNext();
  }

  const swipePrev = () => {
    swiper.slidePrev();
  }

  return (
    <div className={s.container}>
      <div className={s.slideButtons}>
        <img className={s.button} onClick={swipePrev} src={ArrowLeft} />
        <img className={s.button} onClick={swipeNext} src={ArrowRight} />
      </div>      

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
                <a href={elem.src}>
                  <img className={s.slideImage} src={elem.image} />
                </a>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider;