import { Item } from "../Item/Item";
import { ItemList } from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

 export const ItemListContainer = () =>{
    
     return(
       <div style={{textAlign:'center'}}>
             <div style={{textAlign:'center'}} >
                 <ItemList>
                     <Item />
                 </ItemList>
             </div>
         </div>
     )
}

