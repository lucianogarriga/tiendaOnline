import React from 'react'  
import { Link } from 'react-router-dom';

export const ItemList = ({productoProp}) => {
  return (
    <div  className="card" style={{width:'18rem', margin:'15px', padding:'2px'}}>
            <img className="card-img-top" src={productoProp.pictureUrl} alt="Imagen"></img>

            <div className="card-body">
                <h5 className="card-title">{productoProp.title}</h5>
                <p> ${productoProp.price}</p>
                <Link to={`/items/${productoProp.id}`}>
                <button class="btn btn-primary"> Ver mas </button>
                </Link>
            </div>
        </div>
  );
}
