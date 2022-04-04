import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);
    const [changeBtn, setChangeBtn] = useState(true);
    const [stockItems, setStockItems] = useState(stock);

    const sumar = () => {
        if (count < stockItems) {
            setCount(count + 1);
        } else {
            alert('No tenemos mas stock')
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    const addToCart = () => {
        onAdd(count);
        setCount(1);
        setChangeBtn(false);
        setStockItems(stockItems - count);
    };

    return (
        <>
            <div>
                <span>Stock: {stockItems}</span>
                {stockItems > 0 ?

                    <div className="ui three buttons">
                        <button style={{ margin: '10px' }} type="button" className="btn btn-outline-danger" onClick={restar}>-</button>
                        <button style={{ margin: '10px' }} type="button" className="btn btn-outline-dark">{count}</button>
                        <button style={{ margin: '10px' }} type="button" className="btn btn-outline-success" onClick={sumar}>+</button>
                        <br />
                        {changeBtn ?
                            <button style={{ margin: '10px' }} type="button" className="btn btn-outline-primary" onClick={addToCart}>
                                Añadir al Carrito
                            </button>
                            :
                            <div>
                                <button style={{ margin: '10px' }} type="button" className="btn btn-outline-primary" onClick={addToCart}>
                                    Añadir al Carrito
                                </button>
                                <Link to="/cart" style={{ margin: '10px' }} type="button" className="btn btn-outline-primary">
                                    Finalizar compra
                                </Link>
                            </div>
                        }
                    </div>
                    :
                    <div>
                        <button type="button" className="btn btn-light" disabled>Producto sin stock</button>
                        <br/>
                        <Link to="/cart" style={{ margin: '10px' }} type="button" className="btn btn-outline-primary">
                            Ir al Carrito
                        </Link>
                    </div>
                }
            </div>
        </>
    )
}
export default ItemCount
