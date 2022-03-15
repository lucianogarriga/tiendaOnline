import React from "react";
import { Link } from "react-router-dom";

export const Item = ({item} ) =>{

    return(
        <div className='col-md-4'>
            <div className="card mt-5 align-items-center">
                <img className="card-img-top" src={item.imageUrl} style={{width: 280}} alt="Imagen"></img> 
                <div className="card-body ">
                    <h5 className="card-title ">{item.title}</h5>
                    <p> ${item.price}</p>
                    <Link to={`/item/${item.id}`}>
                        <button className="btn btn-primary"> Ver mas </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
