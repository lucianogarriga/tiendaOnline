import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export const Home = () => {

    const text = 'Bienvenido a la tienda oficial REPLACE'

  return (
    <>
     <h1 style={{margin: 15, textAlign: 'center'}}>{text}</h1>
        <div className='container'>
            <div className='contain'>
                <ItemListContainer categoryId="MLA1051" categoryName="Celulares"/>

            </div>
        </div>
    </>
  )
}
