import React from 'react'
import s from './Header.module.scss'

import Logo from '../../images/logo-white.png';
import HeaderImage1 from '../../images/header-image-1.png';
import HeaderImage2 from '../../images/header-image-2.png';
import HeaderImage3 from '../../images/header-image-3.png';
import HeaderImage4 from '../../images/header-image-4.png';
import HeaderImage5 from '../../images/header-image-5.png';
import HeaderImage6 from '../../images/header-image-6.png';
import Button from '../Button';

function Header() {
  return (
    <div className={s.header}>
      <div className={s.menu}>
        <img className={s.logo} src={Logo} alt="" />
        <div>Личный кабинет</div>
      </div>

      <h2 className={s.title}>
        Бронирование билетов
      </h2>

      <div className={s.tickets}>
        <input className={s.cityFrom} type="text" placeholder="Откуда" />
        <input className={s.cityTo} type="text" placeholder="Куда" />
        <input className={s.dateFrom} type="text" placeholder="Туда" />
        <input className={s.dateTo} type="text" placeholder="Обратно" />
        <input className={s.passenger} type="text" placeholder="Пассажиры" />
        <Button />
      </div>

      <div className={s.animation}>
        <img className={s.image1} src={HeaderImage1} alt="" />
        <img className={s.image2} src={HeaderImage2} alt="" />
        <img className={s.image3} src={HeaderImage3} alt="" />
        <img className={s.image4} src={HeaderImage4} alt="" />
        <img className={s.image5} src={HeaderImage5} alt="" />
        <img className={s.image6} src={HeaderImage6} alt="" />
      </div>

    </div>
  )
}

export default Header