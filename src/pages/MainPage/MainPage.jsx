import React from "react";
import { Link } from "react-router-dom";

import Slider from "../../components/Slider";
import slide1 from "../../images/slide-1.png";
import slide2 from "../../images/slide-2.png";
import slide3 from "../../images/slide-3.png";
import slide4 from "../../images/slide-4.png";
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Popular from '../../components/Popular';
import Map from "../../components/Map";
import About from "../../components/About";
import AnimatedIcons from "../../components/AnimatedIcons/AnimatedIcons";

import s from "./MainPage.module.scss";

const slides = [
  {
    id: 0,
    image: slide1,
    src: "https://www.aviasales.ru/"
  },
  {
    id: 1,
    image: slide2,
    src: "https://www.aviasales.ru/"
  },
  {
    id: 2,
    image: slide3,
    src: "https://www.aviasales.ru/"
  },
  {
    id: 3,
    image: slide4,
    src: "https://www.aviasales.ru/"
  },
];

function MainPage() {
  return (
    <div>
      <div className={s.container}>
        <Header />
        <Popular />        
        <Slider slides={slides}/>
        <About />                
        <Link to="/destination">
          <Map />
        </Link>        
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
