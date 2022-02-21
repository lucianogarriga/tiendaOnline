import { useEffect } from "react"
import { useState } from "react"
import {Item} from '../Item/Item'
import data from '../Data/Data'

const productos = data;

export const ItemList = (props) =>{
   
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        const promise = getItems()
        promise.then(json => { 
            setLoading(false)
            setProducts(json) 
        })
    }, [])

    const getItems = () => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        return promise
    }

    return(
        <>    
        {loading && <h5 style={{margin:"1rem", padding:"10px"}}>Cargando lista de productos</h5>}
            <div className="row justify-content-center">
            {
                products.map(product => 
                        <Item id={product.id} title={product.title} pictureUrl={product.pictureUrl} 
                        price={product.price} stock={product.stock}
                        onAddCard={(e) => console.log(e)}/>
                )
            }
            </div>
        </>
    )
}