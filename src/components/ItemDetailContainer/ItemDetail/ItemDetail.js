import React, { useContext } from 'react'
import { CartContext } from '../../Context'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'

export const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
        addItem(item, count);
    }

    return (
        <>
            <div className='container my-2 py-2'>
                <div className='row' style={{ textAlign: 'justify', margin: '2rem' }}>
                    <div className='col-md-6 d-flex justify-content-center mx-auto' style={{ marginTop: '1rem' }}>
                        <img src={item.imageUrl} alt={item.title} height='400px' />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className="display-7 mb-4 fw-bold" style={{textAlign:'center'}}>{item.title}</h2>
                        <p className='lead'>{item.description}</p>
                        <div style={{textAlign:'center'}}>
                        <h2 className='m-3 fw-bold'>Precio: ${item.price}</h2>
                        <ItemCount item={item} stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd} />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
