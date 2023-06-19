import React from 'react'
import s from './AnimatedPlane.module.scss'
import Plane from '../../images/plane.png';
import Cloud1 from '../../images/cloud1.png';
import Cloud2 from '../../images/cloud2.png';
import Cloud3 from '../../images/cloud3.png';

function AnimatedPlane() {
  return (
    <div className={s.animation}>
        <div>
            <img className={s.plain} src={Plane} alt="" />
        </div>
        <div>
            <img className={`${s.cloud1} cloud1`} src={Cloud1} alt="" />
        </div>
        <div>
            <img className={`${s.cloud2} cloud2`} src={Cloud2} alt="" />
        </div>
        <div>
            <img className={`${s.cloud3} cloud3`} src={Cloud3} alt="" />
        </div>        
    </div>
  )
}

export default AnimatedPlane;