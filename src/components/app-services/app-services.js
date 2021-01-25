import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import './app-services.css';
import Tab from "react-bootstrap/Tab";


const services = [
  {title: 'Погружаемся в проект и изучаем ваш продукт', text: 'Погружаемся в проект и изучаем ваш продукт\n' +
        'Глубокая аналитика и комплексный подход. Все сайты имеют индивидуальный дизайн и продуманное юзабилити.'},
  {title: 'Анализируем конкурентов и целевую аудиторию', text: 'Цель рекламной компании и seo - положительная динамика позиций ' +
        'сайта и поискового трафика весь срок продвижения.'},
  {title: 'Улучшаем, развиваем и поддерживаем', text: 'Развиваем как созданные проекты в нашей веб-студии, так и сайты,' +
        'разработанные в других компаниях и агентствах.'},
];

const AppServices = () => {

  const content = services.map(item => {
    return (
        <Col key={item.title}>
          <Card className="text-center" style={{ height: '260px' }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    )
  });

  return (
    <Container className ="app-service mb-5">
      <Tab.Pane id="services" />
    <h1 className="text-center">Наши услуги</h1>
      <Row>
        {
          content
        }
      </Row>
    </Container>
  )
};

export default AppServices;
