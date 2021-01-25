import React from 'react';
import './app-jumbotron.css'
import {Jumbotron, Button, Container, Row, Col, Image} from 'react-bootstrap';
import {pic} from '../../img/img'

const AppJumbotron = ({showAbout, accordion}) => {
  return (
      <Jumbotron className="jumbotron">
        <Container className="m-auto">
          <Row>
            <Col>
              <Image src={pic} thumbnail/>
            </Col>
            <Col>
              <h1>СОЗДАЕМ ПРОДАЮЩИЕ САЙТЫ</h1>
              <p>
                Рады сообщить, что в новом году в коллектив Den & Co увеличился на 4 человека.
                Из нескольких десятков кандидатов мы выбрали настоящих профессионалов своего дела.
                С их помощью качество услуг нашей компании станет еще выше.
              </p>
              <p>
                <Button variant="info"
                        onClick={() => showAbout()}
                >О нас</Button>
              </p>
            </Col>
          </Row>

          <Row>
            {accordion}
          </Row>

        </Container>
      </Jumbotron>
  );
}

export default AppJumbotron;
