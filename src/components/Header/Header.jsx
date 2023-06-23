import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import s from './Header.module.scss';

import Logo from '../../images/logo-white.png';
// import Button from '../Button';
import AnimatedPlane from '../AnimatedPlane';
import iconTelephone from "../../images/icon-telephone.png";
import Authorization from '../Authorization/Authorization';

function Header({ renderTitle = true, renderAnimatedPlane = true }) {
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [cityFromData, setCityFromData] = useState([]);
  const [cityToData, setCityToData] = useState([]);
  const [isShownCityFrom, setIsShownCityFrom] = useState(false);
  const [isShownCityTo, setIsShownCityTo] = useState(false);
  const [cityFrom, setCityFrom] = useState(null);
  const [cityTo, setCityTo] = useState(null);
  const [openAuthorization, setOpenAuthorization] = useState(false);

  useEffect(() => {
    const getData = async () => {
        const response = await fetch(`https://events.breaktime.kz/ajy/?tickets&origin=ALA`);
        const data = await response.json();
        // console.log(data);
        
        const origin = data.map(item => item.origin);
        setCityFromData(origin);

        const destination = data.map(item => item.destination);
        setCityToData(destination);
    }
    getData();
  }, [])

  const handleCityFromClick = (city) => {
    setIsShownCityFrom(!isShownCityFrom); // Переключаем состояние выпадающего окна
    setCityFrom(city); // Сохраняем выбранный город
  };

  const handleCityToClick = (city) => {
    setIsShownCityTo(!isShownCityTo); // Переключаем состояние выпадающего окна
    setCityTo(city); // Сохраняем выбранный город
  };

  const handleAuthorization = () => {
    setOpenAuthorization(true);
  }

  return (
    <div className={s.header}>
      <div className={s.menu}>
        <img className={s.logo} src={Logo} alt="" />
        <div className={s.rightBlock}>
          <div className={s.telephone}>
            <img className={s.icon} src={iconTelephone} alt="" />
            <a href='tel:+77015556677' className={s.telNumber} >+ 7 701 555 66 77</a>
          </div>
          <button className={s.cabinet} onClick={handleAuthorization}>Личный кабинет</button>
          {openAuthorization && <Authorization />}
        </div>
      </div>

      {renderTitle && (
        <h2 className={s.title}>
          Бронирование авиабилетов
        </h2>
      )}

      <div className={s.tickets}>
        <input 
          className={`${s.field} ${s.cityFrom}`} 
          type="text" 
          placeholder="Откуда" 
          value={cityFrom || ''}
          onClick={handleCityFromClick} />
        {isShownCityFrom && (
          <div className={`${s.dropdown1} ${s.showCityFrom}`}>
            {cityFromData.map(destination => (
              <div key={destination} onClick={() => handleCityFromClick(destination)}>{destination}</div>
            ))}
          </div>
        )}

        <input 
          className={`${s.field} ${s.cityTo}`} 
          type="text" 
          placeholder="Куда" 
          value={cityTo || ''}
          onClick={handleCityToClick} />
        {isShownCityTo && (
          <div className={`${s.dropdown2} ${s.showCityTo}`}>
            {cityToData.map(destination => (
              <div key={destination} onClick={() => handleCityToClick(destination)}>{destination}</div>
            ))}
          </div>
        )}

        <DatePicker
          className={`${s.field} ${s.dateFrom}`}
          selected={dateFrom}
          onChange={(date) => setDateFrom(date)}
          placeholderText="Когда"
        />

        <DatePicker
          className={`${s.field} ${s.dateTo}`}
          selected={dateTo}
          onChange={(date) => setDateTo(date)}
          placeholderText="Обратно"
        />

        <input className={`${s.field} ${s.passenger}`} type="text" placeholder="Пассажиры" />

        <button className={`${s.field} ${s.button}`}>Найти билет</button>
      </div>

      {renderAnimatedPlane && <AnimatedPlane />}
    </div>
  )
}

export default Header;