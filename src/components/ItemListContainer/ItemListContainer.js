import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList' 
 
export const ItemListContainer = ({categoryId, categoryName }) =>{

    const [items, setItems] = useState([]) 
    const [loading, setLoading] = useState(false)

     useEffect(()=> {
        setLoading(true)
        setTimeout(()=>{
            fetch (`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=4`)
                .then(response=> response.json())
                .then(respJSON => {console.log(respJSON.results); setItems(respJSON.results); setLoading(false)})
                .catch(error => console.log("Error", error))
        }, 2000)
    }, [categoryId])

    
    return(
        <>  
        <div style={{textAlign: 'center'}}>
           <h3 style={{margin: '1rem', padding: '2px'}}>{categoryName}</h3>
             
                {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    <div className='row justify-content-center'>
                     {items.map(item=>(
                        <ItemList 
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            thumbnail={item.thumbnail}
                            id={item.id}
                        />
                    ))}
                    </div>
                )}
             
        </div>
        </>
    )
}