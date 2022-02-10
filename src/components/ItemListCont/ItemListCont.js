import { ItemCount } from "../ItemCount/ItemCount";
import './ItemListCont.css';

export const ItemListContainer = (props) =>{
    
    return(
        <div style={{textAlign:'center'}} className="itemUno">
            <h1 style={{fontSize: '1.6rem'}}> {props.title}</h1>
            <p style={{fontSize: '1rem', paddingBottom:'8px'}}> {props.sub}</p>
            <div style={{textAlign:'center'}}>
                <ItemCount/>
            </div>
        </div>
    )
}

