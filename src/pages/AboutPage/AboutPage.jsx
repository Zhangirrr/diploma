import React from 'react';

import Header from "../../components/Header";
import AnimatedIcons from "../../components/AnimatedIcons";
import Footer from "../../components/Footer";

import s from './AboutPage.module.scss'

function AboutPage() {
  return (
    <div>
       <div className={s.container}>
        <Header renderTitle={false} renderAnimatedPlane={false} />

        <div className={s.about}>
            <h1 className={s.title}>О нас</h1>
            <div className={s.block}>
              <div className={s.leftBlock}>
                  <p className={s.text}>Авиакомпания Asejanlet была зарегистрирована в 2023 году, а 15 мая 2023 года выполнила 
                      свой первый рейс из Алматы в IT-столицу мира Сан-Хосе.</p>
                  <p className={s.text}>Инаугурацию рейса посетили президент Республики Казахстан и cэр Ричард Эванс, 
                      представляя двух акционеров авиакомпании - правительство Республики Казахстан 
                      и британскую компанию BAE Systems PLC соответственно.</p>
                  <p className={s.text}>В совместном предприятии с долями участия правительства - 51 процент, принадлежащий 
                      АО «Фонд национального благосостояния «Самрук-Казына», и компании BAE Systems PLC 
                      (Великобритания) (49 процентов) партнерские отношения акционеров оставались стабильными 
                      в течение всей истории развития авиакомпании.</p>
                </div>
                <div className={s.rightBlock}>
                  <AnimatedIcons />
                </div>
            </div>
        </div>

        <div className={s.about}>
            <h1 className={s.title}>Парк воздушных судов</h1>
            <p className={s.text}>Парк воздушных судов авиакомпании Asejanlet Air состоит из современных воздушных судов 
                западного производства таких типов как: «Боинг 767-300ER», «Эйрбас A320neo», «Эйрбас A321», 
                «Эйрбас A321neo», «Эйрбас A321neo LR», и «Эмбраер E190-E2». На сегодняшний день в парке авиакомпании 
                Asejanlet Air 29 воздушных судов.</p>
            <h1 className={s.title}>Характеристики самолетов</h1>
            <table className={s.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>Боинг 767-300ER</th>
                  <th>Эйрбас А321neo LR</th>
                  <th>Эйрбас А321neo</th>
                  <th>Эйрбас A320neo</th>
                  <th>Эйрбас A321</th>
                  <th>Эмбраер E190-E2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Крейсерская скорость (км/ч)</td>
                  <td>850</td>
                  <td>935</td>
                  <td>835</td>
                  <td>828</td>
                  <td>825</td>
                  <td>850</td>
                </tr>
                <tr>
                  <td>Дальность полета (км)</td>
                  <td>11</td>
                  <td>7,4</td>
                  <td>6,5</td>
                  <td>6,85</td>
                  <td>5,95</td>
                  <td>6,5</td>
                </tr>
                <tr>
                  <td>Шаг кресел в дюймах (бизнес-класс)</td>
                  <td>42-45</td>
                  <td>44-45</td>
                  <td>37</td>
                  <td>39</td>
                  <td>37</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>Ширина кресел в дюймах (бизнес-класс)</td>
                  <td>21,5</td>
                  <td>21,5</td>
                  <td>20,45</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21,25</td>
                </tr>
                <tr>
                  <td>Пассажирский салон (эконом-класс)</td>
                  <td>193</td>
                  <td>150</td>
                  <td>151</td>
                  <td>132</td>
                  <td>151</td>
                  <td>96</td>
                </tr>
                <tr>
                  <td>Шаг кресел в дюймах (эконом-класс)</td>
                  <td>31-32</td>
                  <td>31-32</td>
                  <td>31</td>
                  <td>30-31</td>
                  <td>30-32	</td>
                  <td>31-29</td>
                </tr>
                <tr>
                  <td>Ширина кресел в дюймах (эконом-класс)</td>
                  <td>18,1</td>
                  <td>16,3-18,0</td>
                  <td>16,3-18,0</td>
                  <td>16,3-18,0</td>
                  <td>316,3-18,0</td>
                  <td>21,25</td>
                </tr>
              </tbody>
            </table>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default AboutPage;