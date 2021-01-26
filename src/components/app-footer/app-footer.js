import React from 'react';
import { Container } from 'react-bootstrap';

import './app-footer.css';
import NavbarComp from "../navbar/navbarComp";

const AppFooter = () => {
  return(
      <Container fluid className="app-footer">
        <Container className ="app-footer-content">
          <NavbarComp pos={'block'}/>
          <div className="address">
            <h3>
             Den & Co
            </h3>
            <h6>
              Офис в Кишиневе:
            </h6>
            <p>
              2546 Decebal 139, оф. 306<br />
              Тел: 37389765345<br />
              email: info@delaemsaity.com
            </p>
            <p>&copy; 2021 localhost:3000</p>
          </div>
          <GoogleMap />

        </Container>
      </Container>
  )
};

export default AppFooter;

const GoogleMap = () => {
  return (
      <div className='map'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.0066197532196!2d28.85774461560969!
              3d47.00084297914915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ea9e046c4d3%3A0x13278ab505741
              c64!2sBulevardul%20Decebal%20139%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sru!2s!4v1611586748666!5m2!1sru!2s"
            frameBorder="0" allowFullScreen="" aria-hidden="false" width="400"
            tabIndex="0" />
      </div>
  )
}
