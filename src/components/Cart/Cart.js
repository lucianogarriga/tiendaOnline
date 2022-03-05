import React from 'react' 
import { useCartContext } from '../../Context';
import { Link } from 'react-router-dom';

export const Cart = ({items = [] }) => {
    
 const {cartItems} = useCartContext();
 console.log(cartItems); 
    
  return (
   <>
      {cartItems.length === 0 ? (
         <div className='container'>
         <div className='row' style={{textAlign:'justify'}}>
             <div className='col-md-6' style={{marginTop: '1rem'}}> <h4 style={{textAlign: 'center', padding: '1rem'}}>Carrito vacio</h4>
           </div>
           <div className='col-md-6' style={{marginTop: '1rem'}}>
        <Link className='btn btn-primary' style={{marginTop:'1rem', alignContent:'center'}} to="/">Ir al Listado de Productos</Link></div></div></div>
        ) : (
        cartItems.map((i) => {
          return (
            <>
              <p style={{margin:'1rem 1rem'}}>
                {i.item} x {i.amount}
              </p>
              <button className="btn btn-danger" style={{marginLeft:'1rem'}}>
                Eliminar
              </button>
            </>
          );
        })
      )}
    </>
  )
} 