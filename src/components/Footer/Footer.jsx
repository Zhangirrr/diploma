import React from 'react'
import s from './Footer.module.scss'

import FooterImage from "../../images/footer-image.png";
import Logo from "../../images/logo.png";
import iconTelephone from "../../images/icon-telephone.png";
import iconTelegram from "../../images/icon-telegram.png";
import iconInstagram from "../../images/icon-instagram.png";
import iconFacebook from "../../images/icon-facebook.png";


function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerTop}>
        <img className={s.image} src={FooterImage} alt="" />
        <div className={s.title}>Откройте для себя весь мир!</div>
      </div>

      <div className={s.footerBottom}>
        <div className={s.footerColumn}>
          <div className={s.title}>Страны</div>
          <div>Список</div>
        </div>

        <div className={s.footerColumn}>
          <div className={s.title}>Города</div>
          <div>Список</div>
        </div>

        <div className={s.footerColumn}>
          <div className={s.title}>Направления</div>
          <div>Список</div>
        </div>

        <div className={s.footerColumn}>
          <div className={s.title}>Авиакомпании</div>
          <div>Список</div>
        </div>
      </div>

      <div className={s.footerContacts}>
        <img className={s.logo} src={Logo} alt="" />
        <div className={s.telephone}>
          <img className={s.icon} src={iconTelephone} alt="" />
          <div className={s.telNumber}>
            <div>+ 7 701 555 66 77</div>
            <div>+ 7 701 555 66 77</div>
          </div>
        </div>
        <div className={s.socialMedia}>
          <img className={s.icon} src={iconTelegram} alt="" />
          <img className={s.icon} src={iconInstagram} alt="" />
          <img className={s.icon} src={iconFacebook} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer