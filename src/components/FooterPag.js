import React from "react";
import "./FooterPag.css";
import { FaMapMarkedAlt, FaWhatsapp, FaMailBulk, FaFacebookF, FaLinkedinIn, FaBook } from "react-icons/fa";
import logo from "../img/logo-imcetron.png";

 export function FooterPag() {
  return (
    <div className="footerP">
      
        <div className="row1"> 
          <div className="line1">      
            <ul className="list-unstyled">
              <li><img src={logo} alt='logo Imcetron'/></li>
            </ul>
          </div>
        <div className="line2">
            <ul className="list-unstyled">
              <li>IMPORTADOR Y DISTRIBUIDOR DE MATERIALES Y LIQUIDOS ELÉCTRICOS </li>
            </ul>
        </div>

        <div className="line3">
            <ul className="list-unstyled">
              <li><FaFacebookF className="face"/>&nbsp;<FaLinkedinIn className="linken"/></li>
            </ul>
        </div> 
        </div>

        <div className="row">       
          <div className="col1">
            <ul className="list-unstyled">
              <li>Imcetron &copy; {new Date().getFullYear()} | Todos los derechos reservados</li>
            </ul>
          </div>          
          <div className="col2">
            <ul className="list-unstyled">
              <li><FaMapMarkedAlt /> Calle La Colonia Nro. 116, Rímac</li>
              <li><FaWhatsapp /> +51 994 013 327 </li>
              <li><FaMailBulk /> ventas@imcetron.com.pe </li>
            </ul>
          </div>      
          <div className="col3">
            <ul className="list-unstyled">
              <li><FaBook/> Libro de Reclamaciones</li>
            </ul>
          </div>

        </div>
      
    </div>
  );
}