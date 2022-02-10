import React, {useState} from "react";

export const ItemCount = () =>{
    
    const [count, setCount] = useState(1);
    const handleSumar = () => {
        setCount(count+1);
    }
    const handleRestar = () => {
        setCount(count-1);
    }
    return(
        <>
            <p style={{fontSize: '1rem', paddingTop:'8px'}}>Cantidad: {count} </p>
            <button className="botonModif" onClick={handleRestar}>-</button>
            <button className="botonAgregar">Agregar</button>
            <button className="botonModif" onClick={handleSumar}>+</button>
        </>
    )
}
