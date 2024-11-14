import './Header.css';
import logo from "../../images/logo.jpeg";
import cart from "../../images/cart.png";
import { Link } from 'react-router-dom';

function Header({handleModalOpened, title}) {
    return (
        <header className="header">
            <div className="header__left-column">
                <img src={logo} className="header__logo"/>
                <h2 className="header__heading">{title}</h2>
            </div>

            <div className="header__right-column">
                <button className="header__button" onClick={handleModalOpened}>Add product</button>
                
                <Link to="/cart">
                    <button className="header__cart-button"><img src={cart} className="header__cart-logo"></img></button>
                </Link>
            </div>
        </header>
    )
}

export default Header;