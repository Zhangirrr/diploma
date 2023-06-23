import React from 'react'

import MapBanner from "../../images/map-banner.png";

import s from './Map.module.scss';

function Map() {
  return (
    <div className={s.map}>
      <div className={s.overlay}>
        <div className={s.title}>Найди билет на карте</div>
      </div>
      
      <img className={s.image} src={MapBanner} alt="" />
    </div>
  )
}

export default Map;
