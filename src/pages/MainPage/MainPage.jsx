import React from "react";

import Slider from "../../components/Slider";
import slide1 from "../../images/slide-1.png";
import slide2 from "../../images/slide-2.png";
import slide3 from "../../images/slide-3.png";
import slide4 from "../../images/slide-4.png";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

<<<<<<< HEAD
import s from "./MainPage.module.scss";
import AnimatedIcons from "../../components/AnimatedIcons/AnimatedIcons";
=======
import s from './MainPage.module.scss'
import Popular from '../../components/Popular/Popular';
>>>>>>> 7091f1bbc60d1030bc068a81dd0553bbac9b75fc

const slides = [
  {
    id: 0,
    image: slide1,
  },
  {
    id: 1,
    image: slide2,
  },
  {
    id: 2,
    image: slide3,
  },
  {
    id: 3,
    image: slide4,
  },
];

function MainPage() {
  return (
    <div>
      <div className={s.container}>
<<<<<<< HEAD
        <Header />
        <div className={s.slider}>
          <Slider slides={slides} />
        </div>
        {/* <Button /> */}
=======
        <Header className={s.header} />
        <Popular />
        <Slider slides={slides}/>
        <Button />
>>>>>>> 7091f1bbc60d1030bc068a81dd0553bbac9b75fc
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
