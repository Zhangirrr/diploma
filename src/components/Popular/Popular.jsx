import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './Popular.module.scss';

function Popular() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div className={s.popular}>
          <div className={s.container}>
              <div className={s.title}>Популярные направления</div>
              <Slider {...settings} className={s.images}>
                  <div>
                      <div className={s.subtitle}>Китай</div>
                      <img className={s.image} src="https://img.freepik.com/free-photo/black-dragon-pool-in-lijiang-yunnan-china_649448-2701.jpg?w=1060&t=st=1687160161~exp=1687160761~hmac=ed56fe58fec47e5ed0f519a85edb25ad470f180cb3a0479226bfd45073f3e82c" alt="" />
                  </div>
                  <div>
                      <div className={s.subtitle}>Москва</div>
                      <img className={s.image} src="https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div>
                      <div className={s.subtitle}>Греция</div>
                      <img className={s.image} src="https://images.pexels.com/photos/2291340/pexels-photo-2291340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div>
                      <div className={s.subtitle}>Италия</div>
                      <img className={s.image} src="https://images.pexels.com/photos/5116646/pexels-photo-5116646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div>
                      <div className={s.subtitle}>Финляндия</div>
                      <img className={s.image} src="https://images.pexels.com/photos/10967302/pexels-photo-10967302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div>
                      <div className={s.subtitle}>Дубай</div>
                      <img className={s.image} src="https://images.pexels.com/photos/15203321/pexels-photo-15203321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>        
              </Slider>
              </div>
          </div>
    )
}

export default Popular;