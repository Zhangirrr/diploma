import React, { useEffect, useRef, useState, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import s from "./Maps.module.scss";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

const Map = () => {
  const mapRef = useRef(null);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}/markers`)
      .then((response) => response.json())
      .then((data) => {
        setCoords(data);
        // console.log(data);
      });

    mapRef.current = L.map("map", {
      center: [52.285577, 76.940722],
      zoom: 5,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Карта принадлежит Асель и Жангир &copy;",
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useMemo(() => {
    if (coords.length > 0) {
      coords.forEach((item) => {

        const customIcon = L.icon({
          iconUrl: item.icon,
          iconSize: [20, 20], 
          iconAnchor: [10, 10], 
        });

        const marker = L.marker([item.lat, item.lon], {
          icon: customIcon,
          alt: item.city,
        }).addTo(mapRef.current);

        marker.bindTooltip(item.city, {
          permanent: true, 
          direction: "top", 
          className: s.cityLabel, 
        });
      });
    }
  }, [coords]);

  return <div id="map" className={s.map}></div>;
};

export default Map;
