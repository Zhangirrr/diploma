import React, { useEffect, useState } from 'react';
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
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const [popularPlaces, setPopularPlaces] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://events.breaktime.kz/ajy/?popular_destinations`);
            const data = await response.json();
            setPopularPlaces(data);
        }
        getData();
      }, [])

    return (
      <div className={s.popular}>
          <div className={s.container}>
              <div className={s.title}>Популярные направления</div>
              <Slider {...settings} className={s.images}>
                {popularPlaces.map((popular, index) => (
                    <div key={index} className={s.slide}>
                        <img className={s.image} src={popular.image} alt={popular.alt} />
                        <div className={s.country}>{popular.contry}</div>
                    </div>
                ))}
              </Slider>
              </div>
          </div>
    )
}

export default Popular;