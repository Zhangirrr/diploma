import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Header.module.scss'

import Logo from '../../images/logo-white.png';
import Button from '../Button';
import AnimatedPlane from '../AnimatedPlane';
import iconTelephone from "../../images/icon-telephone.png";

function Header() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);  

  useEffect(() => {
    const getData = async () => {
        const response = await fetch(`https://events.breaktime.kz/ajy/?tickets&origin=ALA`);
        const data = await response.json();
        console.log(data);
    }
    getData();
  }, [])

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
        <AnimatedPlane />
    </div>
  )
}

export default Header