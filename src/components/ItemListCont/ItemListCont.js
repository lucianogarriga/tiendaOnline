import './ItemListCont.css';

export const ItemListContainer = (props) =>{
    return(
        <div className="itemUno">
        <h1 style={{textAlign:'center'}}> {props.title}</h1>
        <p style={{textAlign:'center'}}> {props.sub}</p>
        </div>
    )
}