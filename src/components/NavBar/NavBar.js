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
                    <img src={ReplaceImg} style={{height: '70px', width:'150px'}} className="ReplaceImg"/>
                </Navbar.Brand>
                <CartWidget/>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav style={{textAlign:'center'}}> 
                        <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}} to="/">Home</Link>
                        <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}} to="/category/MLA1051/Celulares y Teléfonos">Celulares</Link>
                        <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}} to="/category/MLA1648/Computación">Computación</Link> 
                        <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}} to="/category/MLA1144/Consolas y Videojuegos">Videojuegos</Link> 
                        <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}}to="/cart">Carrito</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp;