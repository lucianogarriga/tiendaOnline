import ReplaceImg from '../../assets/replace.png'
import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import {CartWidget} from './CartWidget'
import { Link } from 'react-router-dom'

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

                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/">Home</Link>
                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/productos">Productos</Link>
                        <Link style={{textDecoration:'none', color:'white', fontSize:20, padding:5}} to="/lista-items/detalle">Celulares</Link> 

                        {/* <Link to="/cart">Carrito</Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;