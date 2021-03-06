import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliderprod.css"
import { dataDigitalBestSeller, imgService } from '../components/data';


export function SliderProd() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map(item => (
          <div className="card">
            <div className="cart-top">
              <img src={item.linkimg} alt={item.title} />
              <h4>{item.title}</h4>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
}

export default class SliderServicios extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    }; 
    return (
      <div className="ServiSli" >
        <Slider {...settings}>
          {imgService.map(item => (
            <div className="Servimg">
              <img src={item.linkimg} />
              <div className="Servimsg">
                
                <h4>{item.text}</h4>                
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}