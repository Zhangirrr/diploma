import React from "react";
import s from "./DestinationPage.module.scss";
import Maps from "../../components/Maps";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DestinationPage() {
  return (
    <div className={s.wrapper}>
      <Header renderTitle={false} renderAnimatedPlane={false} />
      <Maps />
      <Footer />
    </div>
  );
}

export default DestinationPage;
