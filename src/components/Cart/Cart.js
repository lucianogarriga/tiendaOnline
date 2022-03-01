import React from 'react' 
import { useCartContext } from '../../Context';

export const Cart = ({items = [] }) => {
    
 const {cartItems} = useCartContext();
 console.log(cartItems); 
    
  return (
   <>
      {cartItems.length === 0 ? (
        <h4 style={{textAlign: 'center', padding: '1rem'}}>Carrito vacio</h4>
      ) : (
        cartItems.map((i) => {
          return (
            <>
              <p>
                {i.item} x {i.amount}
              </p>
              <button className="btn btn-danger">
                Eliminar
              </button>
            </>
          );
        })
      )}
    </>
  )
} 