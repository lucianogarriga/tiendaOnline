import React from 'react'
import { useState, useContext } from 'react';
import {ItemList} from './components/ItemList/ItemList'

export const CartContext = React.createContext()

 export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const onAdd = (item, amount) => {
    if (cartItems.some((product) => product.id === item.id)) {
      const copy = [...cartItems];
      const repeatItemIndex = cartItems.findIndex(
        (product) => product.id === item.id
      );
      copy[repeatItemIndex] = {
        ...copy[repeatItemIndex],
        amount: copy[repeatItemIndex].amount + amount,
      };

      setCartItems(copy);
      setCartCount((prev) => prev + amount);
       
    } else {
      setCartItems([...cartItems, { ...item, amount }]);
      setCartCount((prev) => prev + amount); 
    }
  };

  return (
    <CartContext.Provider value={{cartCount, cartItems, onAdd}}>{children}
    </CartContext.Provider>
  )
}
