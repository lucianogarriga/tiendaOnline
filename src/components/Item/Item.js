import { useState } from "react";
import './Item.css';

export const Item = (props) =>{
  const { title, price, stock, pictureUrl, onAddCard } = props

   const [count, setCount] = useState(0);

     const sumar = () => {
         if(count < stock){
             setCount(count+1);
         } else {
             alert('Lo siento, no hay mas stock!')
         }
     }
    
     const restar = () => {
         if (count > 1){
         setCount(count-1);
         }
     }

     const onAdd = () => {
         const params = {
             count, title
         }
        onAddCard(params)
     }

    return( 
        <div className="col-10 col-md-6 col-lg-3 mx-0  mb-5">
            <div className='card p-0 overflow-hidden h-100 shadow' >

                <img src={pictureUrl} className="card-img-top img-fluid"></img>

                <div className="card-body text-center">
                    
                    <h1 className="card-title" style={{fontSize: '1.4rem'}} > {title}</h1>
                    {/* <p style={{fontSize: '1rem', margin:'0'}}> {description}</p> */}
                    <p className="card-text" style={{fontSize: '1.2rem'}}> ${price}</p>
                    <span style={{fontSize: '12px'}}>Stock: {stock}</span>
                    <p className="card-text" style={{fontSize: '1rem'}}>Cantidad: {count} </p>
                    
                    <button className="botonModif" onClick={restar}>-</button>
                    <button className="botonAgregar" onClick={onAdd}>Agregar</button> 
                    <button className="botonModif" onClick={sumar}>+</button>
                </div>
            </div>
        </div>
    )
}

