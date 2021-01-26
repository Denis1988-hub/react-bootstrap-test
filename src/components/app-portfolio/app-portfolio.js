import React from 'react';
import {Card, Container, Row, Nav} from 'react-bootstrap';
import './app-portfolio.css';
import Tab from "react-bootstrap/Tab";
import {p1,p2,p3,p4,p5,p6,p7,p8} from '../../img/img'

const portfolio = [
  {image: p1, link: 'https://www.ipvanish.com/'},
  {image: p2, link: 'https://azm.to/'},
  {image: p3, link: 'https://burst.shopify.com/home'},
  {image: p4, link: 'https://www.popcornflix.com/pages/discover/d/tv-shows'},
  {image: p5, link: 'https://www.myheritage.ro/'},
  {image: p6, link: 'https://www.demokrathaber1.net/tag/bailey-cars/'},
  {image: p7, link: 'https://seolitte.com/'},
  {image: p8, link: 'https://mmpcfl.com/covid-19-branded-face-masks-hand-sanitizer-safety-signs-and-more-main-page/'},

];

const AppPortfolio = () => {

  const renderContent = () => {
    return portfolio.map((item, index) => {
      return (
          <>
          <Nav.Link className="render-link" href={item.link} target="_blank">
            <Card className={'card-photo mt-5'} key={index + item.link}>
              <Card.Img variant="top" src={item.image}/>
            </Card>
          </Nav.Link>
            </>

      )
    });
  };

  return (
      <Container className="container-port m-auto">
        <Tab.Pane id="portfolio"/>
        <h1 className="text-center">Портфолио</h1>
        <div className="card-port">
          <Row>
            {
              renderContent()
            }
          </Row>
        </div>

      </Container>
  );
};

export default AppPortfolio;


