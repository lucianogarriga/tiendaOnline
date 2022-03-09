import React, {useContext} from 'react'
import { CartContext } from '../Context';

export const Cart = () => {
    const {items, addItem} = useContext(CartContext);
    console.log(items);

  return (
    <div>
        <h1 style={{margin:'1rem', textAlign:'center'}}>Carrito</h1><hr/>
        {
            items.map((item)=>(
                <div className='container'> 
                        <img style={{width:'15%', marginTop: '1rem'}} src={item.thumbnail} /> 
                      
                        <h5>{item.title}</h5>
                        <p>{item.count} x ${item.price}</p>
                    
                </div>
            ))
        }
        
    </div>
  )
}
