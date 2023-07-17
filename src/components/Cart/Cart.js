import React from 'react' 
import { useCartContext } from '../../Context';

export const Cart = ( ) => {
    
 const {cartItems} = useCartContext();
 console.log(cartItems); 
    
  return (
   <>
      {cartItems.length === 0 ? (
        <p>Carrito vacio</p>
      ) : (
        cartItems.map((i) => {
          return (
            <>
              <p>
                {i.item} x {i.amount}
              </p> 
            </>
          );
        })
      )}
    </>
  )
} 