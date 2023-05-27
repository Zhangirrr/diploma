import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Header.module.scss'

import Logo from '../../images/logo-white.png';
import HeaderImage1 from '../../images/header-image-1.png';
import HeaderImage2 from '../../images/header-image-2.png';
import HeaderImage3 from '../../images/header-image-3.png';
import HeaderImage4 from '../../images/header-image-4.png';
import HeaderImage5 from '../../images/header-image-5.png';
import HeaderImage6 from '../../images/header-image-6.png';
import Plane from "../../images/plane.png";
import Cloud1 from "../../images/cloud1.png";
import Cloud2 from "../../images/cloud2.png";
import Cloud3 from "../../images/cloud3.png";
import iconTelephone from "../../images/icon-telephone.png";
import Button from '../Button';

function Header() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  return (
    <div className={s.header}>
      <div className={s.menu}>
        <img className={s.logo} src={Logo} alt="" />
        <div className={s.rightBlock}>
          <div className={s.telephone}>
            <img className={s.icon} src={iconTelephone} alt="" />
            <div className={s.telNumber}>+ 7 701 555 66 77</div>
          </div>
          <div>Личный кабинет</div>
        </div>
      </div>

      <h2 className={s.title}>
        Бронирование билетов
      </h2>

      <div className={s.tickets}>
        <input className={s.cityFrom} type="text" placeholder="Откуда" />
        <input className={s.cityTo} type="text" placeholder="Куда" />

        <DatePicker
          className={s.dateFrom}
          selected={dateFrom}
          onChange={(date) => setDateFrom(date)}
          placeholderText="Туда"
        />

        <DatePicker
          className={s.dateTo}
          selected={dateTo}
          onChange={(date) => setDateTo(date)}
          placeholderText="Обратно"
        />

        <input className={s.passenger} type="text" placeholder="Пассажиры" />
        <Button />
      </div>

      <img className={s.plain} src={Plane} alt="" />               
      <img className={`${s.cloud1} cloud1`} src={Cloud1} alt="" />
      <img className={`${s.cloud2} cloud2`} src={Cloud2} alt="" />
      <img className={`${s.cloud3} cloud3`} src={Cloud3} alt="" />

      

      {/* <div className={s.tickets}>
        <input className={s.cityFrom} type="text" placeholder="Откуда" />
        <input className={s.cityTo} type="text" placeholder="Куда" />
        <input className={s.dateFrom} type="text" placeholder="Туда" />
        <input className={s.dateTo} type="text" placeholder="Обратно" />
        <input className={s.passenger} type="text" placeholder="Пассажиры" />
        <Button />
      </div> */}

        {/* <div className={s.animation}>
          <img className={s.image1} src={HeaderImage1} alt="" />
          <img className={s.image2} src={HeaderImage2} alt="" />
          <img className={s.image3} src={HeaderImage3} alt="" />
          <img className={s.image4} src={HeaderImage4} alt="" />
          <img className={s.image5} src={HeaderImage5} alt="" />
          <img className={s.image6} src={HeaderImage6} alt="" />
        </div> */}

    </div>
  )
}

export default Header