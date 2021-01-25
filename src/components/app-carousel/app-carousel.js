import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import './app-carousel.css';
import {s1, s2, s3} from '../../img/img'

const carouselItem = [
  {slider: s1, title: 'Продвижение', text: 'Перед началом работ по продвижению имеем четкий план'},
  {slider: s2, title: 'Глубокая аналитика', text: 'Проводим глубокий анализ статистических данных'},
  {slider: s3, title: 'Развиваем сайт', text: 'Не останавливаемся на достигнутых результатах'}
];

const AppCarousel = () => {


  const carousel = carouselItem.map((item => {
    return (
        <Carousel.Item key={item.title}>
          <img
              className="d-block w-100"
              src={item.slider}
              alt={item.title}
          />
          <Carousel.Caption>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
    )
  }));


  return (
      <Container>
        <Carousel className="app-carousel">

          {carousel}

        </Carousel>
      </Container>
  );
};

export default AppCarousel;
