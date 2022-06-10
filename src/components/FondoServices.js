import React from 'react';
import { Carousel } from 'react-bootstrap';
import './FondoServices.css';
import banerS from '../img/baner-services.png';


const ServicesFondo = () => {
  return (
    <Carousel pause={true}>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={banerS}
          alt="fondo services"
        />
        <Carousel.Caption className='container-title'>
          <div className='title'>
          <h3>Nuestros Servicios</h3>
          <p>Garantizamos la mejor experiencia a nuestros Clientes</p>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  )
}

export default ServicesFondo;
