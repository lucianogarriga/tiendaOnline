import cart from '../../assets/cart.png';
import "./CartWidget.css"

export const CartWidget = () =>{
    return(
        <div>
            <img src={cart} width="30px" alt="logo"></img>
            <span className='spancart'>0</span>
        </div>
    )
}