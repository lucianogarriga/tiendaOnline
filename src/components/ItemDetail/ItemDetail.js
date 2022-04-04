import React, { useContext }  from 'react'  
import { CartContext } from '../../Context'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'  

    export const ItemDetail = ({item}) =>{

    const {addItem} = useContext(CartContext)
  
    const onAdd = (count) => {
        addItem(item, count);
    }

     return(
        <>
            <div className='container'>
            <div className='row' style={{textAlign:'justify', margin:'2rem'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={item.imageUrl} /> 
                </div>
                <div className='col-md-6' style={{textAlign:'center', marginBottom:'1rem'}}>
                    <h2 className="card-title m-3">{item.title}</h2>       
                    <h3 className='m-3'>Precio: ${item.price}</h3>
                       {/* {
                           add  ?
                                <h2>Producto Agregado</h2>
                                : */}
                                <ItemCount item={item} stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>   
                       {/* } */}
                        <br/>
                        
                    </div>
                    
                </div>
            </div>  
        </>
     )
}
