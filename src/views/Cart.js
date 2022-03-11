import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';

export const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext);

  return (
    <>
    <div className='container'>  
        <h1 style={{margin:'1rem', textAlign:'center'}}>Carrito</h1><hr/>
        {
          items.length > 0 
              ? (
                  <div>
                    {
                      items.map((item)=>(
                        <>
                        <div style={{textAlign:'center', margin:'1rem'}}>
                          <h5>{item.title}</h5>
                          <p>{item.count} x ${item.price}</p>
                          <button className='btn btn-outline-danger' onClick={()=> removeItem(item.id)}>Eliminar</button>
                          <div>
                              <button className='btn btn-danger' onClick={()=> clearItems()} style={{alignContent:'right',marginTop:'3rem'}} >Vaciar carrito</button>
                          </div>
                        </div>
                        </>
                      ))
                    }
                  </div>
                  )

              : <>
                  <div style={{textAlign:'center', marginTop:'1.5rem'}}>
                  <h4>No has agregado productos</h4>
                    <Link to="/" style={{margin:'1.5rem'}} type="button" className="btn btn-outline-primary">Ir a productos</Link>
                  </div>
                </>
           
        } 

            {/* // items.map((item)=>(
            //    <>
            //       <div key="item.id" style={{border:'5px'}}>
            //             <img style={{width:'15%', marginTop: '1rem'}} src={item.thumbnail} /> 
                      
            //             <h5>{item.title}</h5>
            //             <p>{item.count} x ${item.price}</p>
            //             <button className='btn btn-outline-danger' onClick={()=> removeItem(item.id)}>Eliminar</button>
            //       </div>
                  
            //     </>
            // )) */}

        
    </div>
    </>
  )
}
