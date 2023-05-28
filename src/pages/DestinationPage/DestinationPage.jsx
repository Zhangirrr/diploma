import React from "react";
import s from "./DestinationPage.module.scss";
import Maps from "../../components/Maps";
import Header from "../../components/Header";

function DestinationPage() {
  return (
    <div className={s.wrapper}>
      <Header />
        <Maps />
    </div>
  );
}

export default DestinationPage;
