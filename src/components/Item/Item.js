import React from "react";
import { Link } from "react-router-dom";

export const Item = ({item} ) =>{

    return(
        <div className='col-md-4'>
            <div className="m-1 align-items-center">
                <img className="card-img-top" src={item.imageUrl} style={{width: '20vh'}} alt="Imagen"></img> 
                <div className="card-body ">
                    <h4 className="card-title ">{item.title}</h4>
                    <h5 className="m-3"> ${item.price}</h5>
                    <Link to={`/item/${item.id}`}>
                        <button className="btn btn-outline-primary"> Ver mas </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
