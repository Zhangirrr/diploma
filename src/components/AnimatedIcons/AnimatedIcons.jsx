import React from 'react'
import s from './AnimatedIcons.module.scss'
import HeaderImage1 from '../../images/header-image-1.png';
import HeaderImage2 from '../../images/header-image-2.png';
import HeaderImage3 from '../../images/header-image-3.png';
import HeaderImage4 from '../../images/header-image-4.png';
import HeaderImage5 from '../../images/header-image-5.png';
import HeaderImage6 from '../../images/header-image-6.png';

function AnimatedIcons() {
  return (
    <div className={s.animation}>
      <div className={s.imageContainer}>
        <img className={s.image2} src={HeaderImage2} alt="" />
      </div>

      <img className={s.image1} src={HeaderImage1} alt="" />
      <img className={s.image3} src={HeaderImage3} alt="" />
      <img className={s.image4} src={HeaderImage4} alt="" />
      {/* <img className={s.image5} src={HeaderImage5} alt="" /> */}
      <img className={s.image6} src={HeaderImage6} alt="" />
    </div>
  )
}

export default AnimatedIcons;