import React from "react";
// import { NavLink } from "react-router-dom";

export const Item = ({id,title, price, pictureUrl}) =>{

    return(
        <div key={id}className="card" style={{width:'18rem', margin:'15px', padding:'2px'}}>
            <img className="card-img-top" src={pictureUrl} alt="Imagen"></img>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p> ${price}</p>
                <button class="btn btn-primary"> Ver mas</button>
            </div>
        </div>
    )
}
//Los parametros de este Item no los esta tomando en ninguna parte de la pagina