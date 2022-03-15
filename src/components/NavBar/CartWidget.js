import cart from '../../assets/cart.png';
import "./CartWidget.css"
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context';

export const CartWidget = () =>{

    const {items} = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item)=>{
        itemsInCart = itemsInCart+item.count;
    })

    return(
        <div>
            {items !==0
            ?
             <>
            <img src={cart} width="45px" alt="logo"></img>
            <span className='spancart'>{itemsInCart}</span>
             </>
            : ''
            }   
        </div>
    )
}