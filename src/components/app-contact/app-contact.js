import React, {Component} from 'react';
import {Container, Button, Form} from 'react-bootstrap';
import './app-contact.css';
import Tab from "react-bootstrap/Tab";


class AppContact extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  };

  sendName = (e) => {
    const name = e.target.value;
    this.setState({
      name
    })
  };

  sendEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email
    })
  };

  sendMessage = (e) => {
    const message = e.target.value;
    this.setState({
      message
    })
  };

  onSubmitHandler = () => {
    const objData = this.state;
    console.log(objData);

    this.setState({
      name: '',
      email: '',
      message: ''
    })
  };

  render() {
    return (
        <Container className="contact-form">
          <Tab.Pane id="contact"/>
          <h1 className="text-center">Свяжитесь с нами</h1>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Ваше имя:</Form.Label>
              <Form.Control type="text" placeholder="Please enter your name"
                            onChange={(event) => this.sendName(event)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш email:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"
                            onChange={(event) => this.sendEmail(event)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Сообщение</Form.Label>
              <Form.Control as="textarea" rows={3}
                            onChange={(event) => this.sendMessage(event)}
              />
            </Form.Group>
            <Button onClick={() => this.onSubmitHandler()}>Отправить</Button>
          </Form>
        </Container>
    );
  }
}

export default AppContact;
