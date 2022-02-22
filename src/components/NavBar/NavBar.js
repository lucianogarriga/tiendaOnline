import ReplaceImg from '../../assets/replace.png'
import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {CartWidget} from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavbarComp = () =>{
    return(
        <div>
            <Navbar bg="dark" variant="dark"
            sticky='top' expand='lg'>
                <Navbar.Brand>
                    <img src={ReplaceImg} className="ReplaceImg"/>
                </Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav style={{alignItems:'center'}}>
                    <NavLink style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/">Home</NavLink>
                    <NavLink style={{textDecoration:'none', color:'white', fontSize:20, padding:3}} to="/lista-items">Productos</NavLink>   
                    <NavLink style={{textDecoration:'none', color:'white', fontSize:20, padding:3}} to="/carrito">Carrito</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;