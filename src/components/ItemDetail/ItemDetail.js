import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import {productos} from '../Data/Data' 
import { useCartContext } from '../../Context'
import { Link } from 'react-router-dom'

 export const ItemDetail = (props ) =>{
 
    const [item, setItem] = useState([])
    const [count, setCount] = useState(0) 
    const {cartCount, onAdd} = useCartContext() 
   
    const handlerSumar = () =>{
        setCount(count +1);
    };

    const handlerRestar = () =>{
        setCount(count -1);
    }

    const proid = useParams();
    const proDetail = productos.filter(x=>x.id == proid.id)
    const product = proDetail[0];  

    //  const handleCart = (product) =>{
    //      if (btnCart === "Agregar al carrito"){
    //          setBtnCart("Eliminar del Carrito")
    //      }
    //       else {
    //          setBtnCart("Agregar al carrito")
    //      }
    //  }

     return(
        <>
        <div className='container'>
            <div className='row' style={{textAlign:'justify'}}>
                <div className='col-md-6' style={{marginTop: '1rem'}}> 
                    <img className="card-img-top" src={product.pictureUrl} alt="Imagen"></img> 
                </div>
                <div className='col-md-6' style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
                    <h5 className="card-title">{product.title}</h5>
                    <p>Descripcion:<br/> {product.description}</p>
                    <h3>Precio: ${product.price}</h3>
                    {/* <p>Stock: {product.stock}</p> */}
                    <ItemCount 
                    stock={product.stock}   
                    count={count}
                    sub={handlerRestar}
                    add={handlerSumar}
                    initial={1}  
                    />
                    <button className="btn btn-primary" 
                    onClick={()=>onAdd(item,count)}> 
                    Comprar
                   </button>
                    <br/>
                    <Link className='btn btn-primary' style={{marginTop:'1rem'}} to="/cart">Ir al Carrito</Link> 
                </div>
            </div>
            </div>
        </>
     )
}
