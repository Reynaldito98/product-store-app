import "./Card.css"
import airpods from "../../images/airpods.jpeg";
import { useState } from "react";

function Card({item, handleDeleteModalOpened, handleUpdateModalOpened, handleAddItemToCart, cartItems}) {
    const [itemAdded, setItemAdded] = useState(false);
    const cartItemImages = cartItems.map(item => item.image);
    
    const onAddItem = item => {
        handleAddItemToCart(item);
        setItemAdded(true);
    }

    return (
        <li className="card">
            <img src={item.image} alt={item.name} className="card__image" title="Update product information" onClick={() => handleUpdateModalOpened(item)}/>
            <h3 className="card__name">{item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}</h3>
            <h3 className="card__price">{item.price.toFixed(2)}</h3>
            <div className="card__buttons">
                <button className="card__add-button" onClick={() => {onAddItem(item)}} disabled={cartItemImages.includes(item.image)}>Add to cart</button>
                <button className="card__delete-button" onClick={() => handleDeleteModalOpened(item)}>Delete</button>
            </div>
        </li>
    )
}

export default Card;