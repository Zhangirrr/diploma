import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Header.module.scss'

import Logo from '../../images/logo-white.png';
import Button from '../Button';
import AnimatedIcons from '../AnimatedIcons/AnimatedIcons';

function Header() {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

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
        <AnimatedIcons />
    </div>
  )
}

export default Header