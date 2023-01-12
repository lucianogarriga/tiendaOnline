import { collection, addDoc, Timestamp } from 'firebase/firestore';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import { db } from '../utils/firebase';
import './Cart.css'

export const Cart = () => {
  const { items, removeItem, clearItems } = useContext(CartContext);

  const sendOrder = async (e) => {
    e.preventDefault();
    let order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
      },
      productos: items,
      total: items.reduce((ac, productos) => ac + (productos.price * productos.count), 0)
    }
    order.date = Timestamp.fromDate(new Date());
    const queryCollection = collection(db, 'orders');
    console.log('order', order);
    try {
      const docRef = await addDoc(queryCollection, order);
      console.log('docRef', docRef.id);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  

  return (
    <>
      <div className='container'>
        <h4 style={{ marginTop: '1.5rem' }} className="mb-0">Carrito de compras</h4><hr />
        {
          items.length > 0
            ? (
              <div>
                <div className="d-flex justify-content-between"><h5 style={{ margin: '10px' }}>Tienes {items.length} items en el carrito</h5>
                </div>

                <div className="content">
                  <div className="row">
                    <div className="items">
                      {
                        items.map((item) => (

                          <>
                            <div className="product" style={{ textAlign: 'center' }}>
                              <div className="row">
                                <div className="col-md-3">
                                  <img className="img-fluid mx-auto d-block image" width={'200px'} alt="Img product" src={item.imageUrl} />
                                </div>
                                <div className="col-md-8" >
                                  <div className="info" >
                                    <div className="row" >
                                      <div className="col-md-5 mt-2" >
                                        <h5>
                                          {item.title}
                                        </h5>
                                      </div>
                                      <div className="col-md-3 mt-2">
                                        <span>Cantidad: </span>
                                        <p className='bold'> {item.count} </p>
                                        {/* <span>unidades</span> */}
                                      </div>
                                      <div className="col-md-4 mt-2">
                                        <h5 className="mb-3 mt-2">${item.price}</h5>
                                        <button className='btn btn-outline-danger' onClick={() => removeItem(item.id)}>Eliminar</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <button className='btn btn-danger m-2' onClick={() => clearItems()} >Vaciar carrito</button>
                  <hr />
                </div>
                <div className="d-flex m-3 pt-3">
                  <h5>{`Total: $ ${items.reduce((acum, item) => acum + (item.price * item.count), 0)}`}</h5>
                </div> 
                <hr/>
                  <form onSubmit={sendOrder}>
                  <div className="mb-3 mt-4">
                      <label>Nombre</label>
                      <input type="text" className="form-control"/>
                    </div> 
                    
                    <div className="mb-3">
                      <label>Telefono</label>
                      <input type="number" className="form-control"/>
                    </div> 
                    <div className="mb-3">
                      <label>Email </label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Nunca vamos a compartir tus datos personales</div>
                    </div>
                    <div style={{textAlign:'center', padding:'10px'}}>
                    <button type="submit" className="btn btn-primary">Confirmar Compra</button>
                    </div> 
                  </form>
                  <hr /> 
                </div> 
            )
            : <>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <h4>No has agregado productos</h4>
                <Link to="/" style={{ margin: '1rem' }} type="button" className="btn btn-outline-primary">Ir a productos</Link>
              </div>
            </>

        }
      </div>
    </>
  )
}
