import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
// import productos from '../Data/Data'
// // import { useState } from 'react'
// import { useEffect } from 'react'

 export const ItemDetail = ({id, title, pictureUrl} ) =>{

    const {itemName} = useParams();
    console.log('itemName', itemName);

     return(
        <>
        <div className='container'>
            <div className='row' style={{textAlign:'justify'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={pictureUrl} alt="Imagen"></img> 
                </div>
                <div className='col-md-6' style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
                    <h5 className="card-title">{title}</h5>
                    <p>Detalle del Producto: {itemName}</p>
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>
            </div>
        </>
     )
}
