import cart from '../../assets/cart.png';
import "./CartWidget.css"
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context';

export const CartWidget = () =>{

    const {cartCount} = useContext(CartContext)

    return(
        <div>
            <img src={cart} width="30px" alt="logo"></img>
            <span className='spancart'>{cartCount}</span>
        </div>
    )
}