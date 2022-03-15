import '../ItemListContainer/ItemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList' 
import { collection, doc, query, where, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useParams } from 'react-router-dom';
 
export const ItemListContainer = () =>{
 
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams() 
 
    const getData = async()=>{
        try{
            const productosCollection = collection(db, 'items');
            const response = await getDocs(productosCollection);
            const result = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}})
            setProductos(result)
            console.log('result', result);
            } catch (error) {
                console.warn("error", error);
            } 
    }
    
    const getDataCategory = async(categoryId)=>{
        try{
            const productosCollection = collection(db, 'items');
            const response = await getDocs(productosCollection);
            const result = response.docs.map(doc=>{return {id: doc.id, ...doc.data()}})
            setProductos(result.filter(e=>e.categoryId === categoryId)) 

            } catch (error) {
                console.warn("error", error);
            } 
    }

    useEffect(()=>{
        categoryId ?
            getDataCategory() :
            getData()
    }, [categoryId])

    console.log('productos: ', productos);

    return(
        <>  
        <div style={{textAlign: 'center'}}>             
           <div className="container">
                <div className="row">
                        <ItemList items={productos}/>
                </div>
            </div>
        </div>
        </>
    )
}