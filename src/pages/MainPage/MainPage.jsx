import React from 'react'

import Slider from '../../components/Slider';
import slide1 from "../../images/slide-1.png";
import slide2 from "../../images/slide-2.png";
import slide3 from "../../images/slide-3.png";
import slide4 from "../../images/slide-4.png";
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import s from './MainPage.module.scss'

const slides = [
  {
    id: 0,
    image: slide1
  },
  {
    id: 1,
    image: slide2
  },
  {
    id: 2,
    image: slide3
  },
  {
    id: 3,
    image: slide4
  }
]

function MainPage() {
  return (
    <div>
      <div className={s.container}>
        <Header />
        {/* <Slider slides={slides}/> */}
        {/* <Button /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default MainPage;