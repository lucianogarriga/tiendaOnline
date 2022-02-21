import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'


 export const ItemDetail = ({ id, title, description, pictureUrl }) =>{
  
    
     return(
        <div key={id} className="card" style={{width:'18rem', margin:'15px', padding:'2px'}}>
            <img className="card-img-top" src={pictureUrl} alt="Imagen"></img>
            
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
                 
          
       
     )
}
