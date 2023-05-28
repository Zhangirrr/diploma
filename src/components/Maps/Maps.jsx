import React from "react";
import s from "./Maps.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

const Maps = () => (
  <YMaps>
    <div>
      <Map
        className={s.map}
        defaultState={{
          center: [51.143974, 71.435806],
          zoom: 5,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        {/* <Placemark defaultGeometry={[`${endpoint.}`]} /> */}
      </Map>
    </div>
  </YMaps>
);

export default Maps;
