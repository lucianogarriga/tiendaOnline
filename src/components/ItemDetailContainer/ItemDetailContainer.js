import React, {useState, useEffect} from 'react'
import '../ItemListContainer/ItemListContainer.css'  
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { ItemDetail } from '../ItemDetail/ItemDetail'

 export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(()=> {
        setTimeout(()=>{
            fetch(`https://api.mercadolibre.com/items/${params.id}`)
                .then((response) => response.json())
                .then(respJSON => {console.log(respJSON); setItem(respJSON); setLoading(false)})
                .catch(error=> console.log("Error: ", error))
        }, 1000)
    }, [params.id])

      
    return(
        <>    
             
            {loading ? 
                <h2 style={{textAlign:"center", margin:'1rem'}}>Loading...</h2>
             : 
                <div>
                    <ItemDetail item={item} />
                </div>
            }
        </>
     )
}
