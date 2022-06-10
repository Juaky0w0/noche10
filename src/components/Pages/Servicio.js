import React from "react";
import ServicesFondo from "../FondoServices";
import SliderServicios from "../Sliderprod";
import './Servicio.scss';

export const Servicio = () => {
  return (
    <>
    <div className="container-carrusel">
    <ServicesFondo />
    </div>
    <div>
      <SliderServicios />
    </div>
  </>
  );
};