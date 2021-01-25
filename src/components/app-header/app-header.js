import React from 'react';
import { Navbar, Container,  Nav} from 'react-bootstrap';
import './app-header.css';
import {logo} from '../../img/img'
import NavbarComp from "../navbar/navbarComp";

const AppHeader = () => {
  return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className={'header'}>
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/"><img className='logo' src={logo} alt=""/></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <NavbarComp pos={'flex'}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default AppHeader;

