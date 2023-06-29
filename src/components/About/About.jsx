import React from "react";

import s from "./About.module.scss";

import Button from "../Button";
import { Link } from "react-router-dom";

function About () {
    return (
        <div className={s.about}>
            <h1 className={s.title}>О нас</h1>
            <p className={s.text}>Авиакомпания Asejanlet была зарегистрирована в 2023 году, а 15 мая 2023 года выполнила 
                свой первый рейс из Алматы в IT-столицу мира Сан-Хосе.</p>
            <p className={s.text}>Инаугурацию рейса посетили президент Республики Казахстан и cэр Ричард Эванс, 
                представляя двух акционеров авиакомпании - правительство Республики Казахстан 
                и британскую компанию BAE Systems PLC соответственно.</p>
            <p className={s.text}>В совместном предприятии с долями участия правительства - 51 процент, принадлежащий 
                АО «Фонд национального благосостояния «Самрук-Казына», и компании BAE Systems PLC 
                (Великобритания) (49 процентов) партнерские отношения акционеров оставались стабильными 
                в течение всей истории развития авиакомпании.</p>
            
            <Link to="/about">
                <button className={s.moreButton}>Узнать больше</button>
            </Link>
        </div>
    )
}

export default About;