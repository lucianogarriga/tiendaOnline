import { ItemDetail } from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'
import {productos} from '../Data/Data'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

 export const ItemDetailContainer = () => {
     
    const [products, setProducts] = useState({ })
    //siempre que vayamos a crear una variable de tipo objeto, hay que inicializarlo con valor indenifido
    const {id} = useParams()
    
    const getProducto = (name)=>{
        return new Promise((resolve, reject)=>{
            const arrayProduct = productos;
            // en JS hay una funcion que ayuda a encontrar elementos dentro de un array basados en una propiedad en especifico
            const cat = arrayProduct.find((elemento)=>elemento.id === name);
            setTimeout(()=>{
                resolve(cat)
            },2000)
        })
    }
    //ahora voy a consumir los datos que me trae la promesa
    useEffect(()=>{
        const obtenerProducto = async(id)=>{
            const response = await getProducto(id);
              console.log('response', response);
        }
        obtenerProducto(id)
    },[id])

    console.log('parametro recibido', id);
    console.log('products', products); 

    return(
        <>    
            <ItemDetail/>
        </>
     )
}
