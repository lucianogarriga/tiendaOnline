import ReplaceImg from '../../assets/replace.png'
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavbarComp = () => {

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark"
                    sticky='top' expand='lg'>
                    <Navbar.Brand>
                        <img src={ReplaceImg} style={{ height: '70px', width: '150px' }} alt="Replace" className="ReplaceImg" />
                    </Navbar.Brand>
                    <CartWidget />
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav style={{ textAlign: 'center' }}>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/">Home</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/Celulares">Celulares</Link>
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/category/Notebooks">Notebooks</Link>
                            {/* <Link style={{textDecoration:'none', color:'white', fontSize:17, padding:5, margin:5}} to="/category/MLA1144/Consolas y Videojuegos">Videojuegos</Link>  */}
                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: 17, padding: 5, margin: 5 }} to="/cart">Carrito</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default NavbarComp;

