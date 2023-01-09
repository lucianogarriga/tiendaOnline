import React, {useState, useEffect} from 'react'
import '../ItemListContainer/ItemListContainer.css'  
import { useParams } from 'react-router-dom' 
import {ItemDetail} from './ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'

 export const ItemDetailContainer = () => {

    const [selectedItem, setSelectedItem] = useState([]) 
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

   const getSelected = async () =>{
        try{
            const document = doc(db, 'items', id);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()}
            setSelectedItem(result) 
            setLoading(false)
            } catch (error) {
                console.warn("error", error);
            } 
    }
      
    useEffect(()=>{
        getSelected()
    }, [id])

    return(
        <>    
            {loading ? 
                <h2 style={{textAlign:"center", margin:'1rem'}}>Loading...</h2>
             : 
                <div>
                    <ItemDetail item={selectedItem} />
                </div>
            }
        </>
     )
}


// useEffect(()=> {
//     setTimeout(()=>{
//         fetch(`https://api.mercadolibre.com/items/${params.id}`)
//             .then((response) => response.json())
//             .then(respJSON => {console.log(respJSON); setItem(respJSON); setLoading(false)})
//             .catch(error=> console.log("Error: ", error))
//     }, 500)
// }, [params.id])