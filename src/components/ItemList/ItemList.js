import { useEffect } from "react"
import { useState } from "react"
import {Item} from '../Item/Item'
import data from '../Data/Data'

const productos = data;

export const ItemList = () =>{
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
            <section className="py-4 container">              
                {loading && <p style={{color: "white"}}>Cargando lista de productos...</p> }
                <div className="row justify-content-center">
                    {data.productData.map(item => (
                                <Item title={item.title} description={item.description} 
                                pictureUrl={item.pictureUrl}  price={item.price}
                                stock={item.stock}
                                onAddCard={(e) => console.log(e)}/>
                            )
                        )}
                </div>
            </section>
        </>
    )
}