import React from "react";
import CarouselContainer from '../CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Producto.scss';
import { SliderProd } from "../Sliderprod";
import  {BanerIniciofour, BanerInicioone, BanerIniciotree, BanerIniciotwo } from "../BanersInicio";


export const Producto = () => {
  return (
    <>
    <div className="container-carrusel">
    <CarouselContainer />
    </div>

   <div className="products">
    <h2>Productos Destacados</h2>
  </div>

  <SliderProd  />
  <BanerInicioone  />
  <BanerIniciotwo  />
  <BanerIniciotree  />
  <BanerIniciofour  />
  <div className="contenido">
  <div className="marcas">
    <h2>Ellos confian en Nosotros</h2>
  </div>
  <div className="container-marcas">
  <div className="con-mar">
</div>
  </div>
  </div>
  <div className="container-boto">
  <button className='boton-personalizado-contact'><a>CONTACTANOS</a></button>
  </div>
  <div className="container-numero">NUMERO MOVIBLES</div>
</>
  );
};

