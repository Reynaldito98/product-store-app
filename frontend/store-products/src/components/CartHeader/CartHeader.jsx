import './CartHeader.css';
import { Link } from 'react-router-dom';

function CartHeader() {
    return (
        <header className="cart-header">
            <h2 className="cart-header__title">Look at the items in your cart!</h2>
            <Link to="/">
                <button className="cart-header__button">Go back</button>
            </Link>
        </header>
    )
}

export default CartHeader