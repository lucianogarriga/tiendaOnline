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
                    
                    <div className="content">
                            <div className="row"> 
                                <div className="items"> 
                                      {
                                        items.map((item)=>(
                                          
                                          <>
                                            <div className="product">
                                              <div className="row">
                                                <div className="col-md-3">
                                                  <img className="img-fluid mx-auto d-block image" width={'200px'} src={item.imageUrl}/>
                                                </div>
                                                <div className="col-md-8" >
                                                  <div className="info" >
                                                    <div className="row" >
                                                      <div className="col-md-5 mb-2 product-name" >
                                                        <h5>
                                                          {item.title}
                                                        </h5>
                                                      </div>
                                                      <div className="col-md-4 mb-2 quantity">
                                                        <label for="quantity">Cantidad x </label>
                                                        {item.count}
                                                      </div>
                                                      <div className="col-md-3 mb-2 price">
                                                        <h5>${item.price}</h5>
                                                        <button className='btn btn-outline-danger' onClick={()=> removeItem(item.id)}>Eliminar</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                              </div>
                                            </div> 
                                            <hr/>
                                          </>
                                        ))
                                      }
                                </div>
                              </div> 
                          </div>
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
