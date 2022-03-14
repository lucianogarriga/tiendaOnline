import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';

export const Cart = () => {
    const {items, removeItem, clearItems} = useContext(CartContext);

  return (
    <>
    <div className='container'>      
    <h4 style={{marginTop:'1.5rem'}} className="mb-0">Carrito de compras</h4><hr/>
        {
          items.length > 0 
              ? (
                  <div>
                    <div className="d-flex justify-content-between"><h5 style={{margin:'10px'}}>Tienes {items.length} items en el carrito</h5>
                    </div>
                    {
                      items.map((item)=>(
                        <>

                          <div className="col-md-11">
                              <div className="product-details mr-2">
                                  
                                  <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                                      <div className="d-flex flex-row"><img src={item.thumbnail} width="120"/>
                                          <div className="m-5"><span className="font-weight-bold d-block">{item.title}</span>
                                          </div>
                                      </div>
                                      <div className="d-flex flex-row m-1 align-items-center"><span className="d-block">{item.count}x</span><span style={{margin:'20px'}} className="d-block ml-5 font-weight-bold">${item.price}</span><button className='btn btn-outline-danger' onClick={()=> removeItem(item.id)}>Eliminar</button>
                                      </div>
                                  </div> 
                                  <hr/>
                              </div>
                          </div>
                        </>
                      ))
                    }
                    <div style={{textAlign:'center', marginBottom:'3rem'}}>
                      <div className="d-flex mt-3 justify-content-between"><h5 style={{margin:'10px'}}>{`Total: $ ${items.reduce((acum, item) => acum + (item.price * item.count),0)}`}</h5>
                      </div> 
                      <button className='btn btn-danger mt-2' onClick={()=> clearItems()} >Vaciar carrito</button>
                    </div>
                  </div>
                  )
              : <>
                  <div style={{textAlign:'center', marginTop:'1rem'}}>
                  <h4>No has agregado productos</h4>
                    <Link to="/" style={{margin:'1rem'}} type="button" className="btn btn-outline-primary">Ir a productos</Link>
                  </div>
                </>
           
        } 
    </div>
    </>
  )
}
