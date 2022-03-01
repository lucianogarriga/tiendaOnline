import React from 'react'
import { createContext, useState, useContext } from 'react';
import {ItemList} from './components/ItemList/ItemList'

export const CartContext = React.createContext()

 export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const onAdd = (item, amount) => {
      setCartItems([...cartItems, {...item, amount}])
      setCartCount(prev => prev+amount)
  }

  return (
    <CartContext.Provider value={{cartCount, cartItems, onAdd}}>{children}
    </CartContext.Provider>
  )
}
