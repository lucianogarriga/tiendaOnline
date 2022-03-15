import React, { useState, useContext }  from 'react' 
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'  

    export const ItemDetail = ({item}) =>{

    const [add, setAdd] = useState(false)

    const {addItem} = useContext(CartContext)
  
     return(
        <>
            <div className='container'>
            <div className='row' style={{textAlign:'justify', margin:'2rem'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={item.imageUrl} /> 
                </div>
                <div className='col-md-6' style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
                    <h2 className="card-title">{item.title}</h2>      
                    <p> {item.warranty}</p>
                    <h3>Precio: ${item.price}</h3>
                       {
                           add  ?
                                <div>Añadido!</div>
                                :
                                <ItemCount item={item} stock={5} initial={0} addItem={addItem}/>   
                       }
                        
                        <Link to="/cart" style={{margin:'10px'}} type="button" className="btn btn-outline-primary">
                            Finalizar compra
                        </Link>
                    </div>
                    
                </div>
            </div>  
        </>
     )
}
