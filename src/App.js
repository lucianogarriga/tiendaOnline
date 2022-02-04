import logo from './assets/replace.png'
import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <>
      <div className='App'> 
        <Navbar bg="dark" variant="dark"
        sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} className="logo"/>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
          <Nav>
            <NavDropdown title='Equipos'>
              <NavDropdown.Item href='equipos/iphone'>Iphone</NavDropdown.Item>
              <NavDropdown.Item href='equipos/samsung'>Samsung</NavDropdown.Item>
              <NavDropdown.Item href='equipos/motorola'>Motorola</NavDropdown.Item>
              <NavDropdown.Item href='equipos/xiaomi'>Xiaomi</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href='equipos/promo'>Promociones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="redes">Redes</Nav.Link>
            <Nav.Link href="contact">Contacto</Nav.Link>
            <Nav.Link href="about">Carrito</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
        </Navbar>
        <div className='content'>
        <p>Bienvenido</p>
        </div>
      </div>
    </>
  );
}

export default App;
