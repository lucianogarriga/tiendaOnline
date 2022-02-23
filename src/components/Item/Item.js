import React from "react"; 
import { Link } from "react-router-dom";

export const Item = ({id,title, price, pictureUrl}) =>{

    return(
        <div key={id}className="card" style={{width:'18rem', margin:'15px', padding:'2px'}}>
            <img className="card-img-top" src={pictureUrl} alt="Imagen"></img>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p> ${price}</p>
                <Link to={`/items/${id}`}>
                <button class="btn btn-primary"> Ver mas </button>
                </Link>
            </div>
        </div>
    )
} 