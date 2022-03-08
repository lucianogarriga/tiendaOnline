import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([ ])


  const isInCart = (id) =>{

  }

  const addItem = (item,qty) =>{  
      setItems([...items, {id: item.id, name: item.title, qty: qty}]) 
  }

  return (
    <CartContext.Provider value={{items, addItem}}>
          {children}
    </CartContext.Provider>
  )
}
