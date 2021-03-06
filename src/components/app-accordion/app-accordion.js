import React from 'react';
import './app-accordion.css'
import Container from "react-bootstrap/Container";


const AppAccordion = () => {
  return (
      <div className="accordion about">
      <Container>
        <p><strong>У НАС ЕСТЬ ПРИНЦИПЫ</strong><br />
            С самого начала у Den & Co была четкая система принципов, которых мы придерживаемся до сих пор.
            Во-первых, мы ценим наших клиентов. Команда Den & Co быстро ориентируется в бизнес-процессах заказчиков,
            благодаря чему мы создаем для них эффективные бизнес-решения. Мы также успешно продвигаем сайты в сети интернет:
            наш опыт в сфере маркетинга дает для этого широкий набор инструментов и технологий раскрутки. Во-вторых,
            все должно быть эстетично оформлено. И речь не только о безупречном внешнем виде наших сайтов, но и о коде.
            Пользователь его не видит, но нам важно знать, что все прописано в соответствии с нашими внутренними стандартами качества.
            В-третьих, все наши проекты должны быть удобными для пользователя. Именно пользователь в конечном итоге определяет
            успешность Вашего сайта – мы всегда об этом помним.
          </p>
        <p>
          <strong>МЫ - КОМАНДА</strong><br />
            На данный момент у нас в разработке более 20 проектов.
            Помимо этого, Den & Co занимается администрированием и продвижением
            сайтов большинства осуществленных проектов. Den & Co – передовая веб-студия
            и команда профессионалов. Мы гордимся тем, что находимся в перманентном
            процессе изучения мировых тенденций веб-разработки, веб-дизайна и digital-маркетинга.
            Подобное стремление к самообразованию и накопленный опыт позволяют WebUs воплощать в жизнь проекты любой сложности
          </p>
      </Container>
      </div>

  );
};

export default AppAccordion;