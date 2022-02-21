import { ItemList } from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

 export const ItemListContainer = (props) =>{
    
    const {greetings} = props

     return(
       <div style={{textAlign:'center'}}>
             
                 <h1 style={{margin:'1rem'}}>{greetings}</h1>
                 <ItemList/>
         </div>
     )
}

