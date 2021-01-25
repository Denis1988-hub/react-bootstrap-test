import React from 'react';
import {Card, Container, Row, Nav} from 'react-bootstrap';
import './app-portfolio.css';
import Tab from "react-bootstrap/Tab";
import {portfolio} from '../../img/img'


const AppPortfolio = () => {

  const renderContent = () => {
    return portfolio.map((item, index) => {
      return (
          <>
          <Nav.Link className="render-link" href={item.link} target="_blank">
            <Card className={'card-photo mt-5'} key={index + 'AAA'}>
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


