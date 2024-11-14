import './CartItem.css';
import airpods from "../../images/airpods.jpeg";

function CartItem({item, handleRemoveItemFromCart}) {
    return (
        <li className="cart-item">
            <div className="cart-item__container">
                <img src={item.image} alt={item.name} className="cart-item__image"></img>
                <p className="cart-item__title">{item.name}</p>
            </div>
            <p className="cart-item__price">{item.price.toFixed(2)}</p>
            <button className="cart-item__button" onClick={() => {handleRemoveItemFromCart(item)}}>Remove from cart</button>
        </li>
    )
}

export default CartItem