import { ItemDetail } from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'
import productos from '../Data/Data'
// import { useState } from 'react'

const item = productos[1]

 export const ItemDetailContainer = () =>{
     
    // const [productos, setProductos] = useState([])
    
    const getItems = () => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
        return promise
    }

     return(
        <>
            <ItemDetail/>
        </>
     )
}
