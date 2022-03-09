import React, {useState} from "react";

const ItemCount = ({item, stock, initial, addItem}) =>{
 
      const [count, setCount] = useState(initial);

      const sumar = () => {
          if (count < stock){
          setCount(count+1);
      }   else{
          alert('No tenemos mas stock')
          }
      }

      const restar = () => {
          if (count > initial){
          setCount(count-1);
          }
      }
     
      
   

    return(
       <>
           <div className="ui three buttons"> 
                <button style={{margin:'10px'}} type="button" className="btn btn-outline-danger" onClick={restar}>-</button>
                <button style={{margin:'10px'}} type="button" className="btn btn-outline-dark">{count}</button>
                <button style={{margin:'10px'}} type="button" className="btn btn-outline-success" onClick={sumar}>+</button>
            </div>
            {
                count > 0 ?
                <button style={{margin:'10px'}} type="button" className="btn btn-outline-primary" onClick={()=> addItem(item, count )}>
                    Añadir al Carrito
                </button>
                :
                <button style={{margin:'10px'}} type="button" className="btn btn-outline-light">
                   Añadir al Carrito
                </button>
            }



                {/* <p>Cantidad: {count}</p>
                <button className="btn btn-danger" style={{margin:"5px"}} onClick={restar} >-</button>
                <button className="btn btn-primary" >Comprar</button>
                <button className="btn btn-success" style={{margin:"5px"}} onClick={sumar}>+</button> */}
          
        </>
    )
}
export default ItemCount
