import React from 'react'

import MapBanner from "../../images/banner_map.jpg";

import s from './Map.module.scss';

function Map() {
  return (
    <div className={s.map}>
      <img className={s.image} src={MapBanner} alt="" />
      <div className={s.title}>Найдите билеты на карте</div>
    </div>
  )
}

export default Map;