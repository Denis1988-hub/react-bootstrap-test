import React from 'react';
import {Nav} from "react-bootstrap";
import './navbarComp.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";

const NavbarComp = ({pos}) => {

  const position = [
      pos === 'block' && ' d-block',
      pos === 'flex' && ' d-flex mr-5'
  ];

  return (
        <div className="row js">
          <div className={position}>
            <Nav.Link href="#services">Услуги</Nav.Link>
            <Nav.Link href="#portfolio">Портфолио</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>
          </div>
          <div className={position} >
            <Nav.Link href="https://www.facebook.com/Seoland.ru" target="_blank"><FontAwesomeIcon icon={faFacebook} className = "social-icon" /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/seoland.ru/" target="_blank"><FontAwesomeIcon icon={faInstagram} className = "social-icon"/></Nav.Link>
            <Nav.Link href="https://vk.com/seoland" target="_blank"><FontAwesomeIcon icon={faVk} className = "social-icon"/></Nav.Link>
          </div>
        </div>
  );
};

export default NavbarComp;