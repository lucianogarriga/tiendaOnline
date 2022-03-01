import '../ItemListContainer/ItemListContainer.css'
import { useEffect } from "react"
import { useState } from "react"
import { ItemList } from '../ItemList/ItemList'
import {productos} from '../Data/Data'
 

 export const ItemListContainer = (props) =>{ 

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()

    const getItems = () => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
        return promise
    }
    
    useEffect(() => {
        setLoading(true)
        const promise = getItems()
        promise.then(json => { 
            setLoading(false)
            setProducts(json) 
        })
    }, [])

    return(
        <>  
        <div style={{textAlign: 'center'}}>
            <h1 style={{margin: 15}}>Bienvenido a la tienda oficial REPLACE</h1>
        {loading && <h5 style={{margin:"1rem", padding:"10px"}}>Cargando lista de productos</h5>}
            <div className="row justify-content-center">
            {
                products.map(product => 
                        <ItemList key={product.id} productoProp={product}/>
                )
            }
            </div>
            </div>  
        </>
    )
}