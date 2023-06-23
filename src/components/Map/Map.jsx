import React from 'react'

import MapBanner from "../../images/banner_map.jpg";

import s from './Map.module.scss';

function Map() {
  return (
    <div className={s.map}>
      <div className={s.overlay}>
        <div className={s.title}>Найдите билеты на карте</div>
      </div>
      
      <img className={s.image} src={MapBanner} alt="" />
    </div>
  )
}

export default Map;


// import React from 'react'

// import MapBanner from "../../images/banner_map.jpg";

// import s from './Map.module.scss';
// import DestinationPage from '../../pages/DestinationPage/DestinationPage';
// import { Link } from 'react-router-dom';

// function Map() {
//   return (
//     <Link to=/{<DestinationPage />} className={s.map}>
//       <div className={s.overlay}>
//         <div className={s.title}>Найдите билеты на карте</div>
//       </div>
      
//       <img className={s.image} src={MapBanner} alt="" />
//     </Link>
//   )
// }

// export default Map;