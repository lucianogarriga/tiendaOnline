import React, {useState} from "react";

const ItemCount = ({count, sub, add, condition}) =>{
 
    //  const [count, setCount] = useState(initial);

    //  const sumar = () => {
    //      if (count < stock){
    //      setCount(count+1);
    //  }   else{
    //      alert('No tenemos mas stock')
    //      }
    //  }

    //  const restar = () => {
    //      if (count > initial){
    //      setCount(count-1);
    //      }
    //  }

     
//   <h5>{count}</h5>
   

    return(
       <>
            <p>Cantidad: {count}</p>
                <button className="btn btn-danger" style={{margin:"5px"}} onClick={sub} disabled={condition || count === 0}>-</button>
                {/* <button className="btn btn-primary" >Comprar</button> */}
                <button className="btn btn-success" style={{margin:"5px"}} onClick={add} disabled={condition || count === 5}>+</button>
        </>
    )
}
export default ItemCount
