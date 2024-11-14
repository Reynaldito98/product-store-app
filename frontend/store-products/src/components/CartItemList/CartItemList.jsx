import './CartItemList.css';
import CartItem from '../CartItem/CartItem';

function CartItemList({cartItems, handleRemoveItemFromCart, handleSuccessfulModalOpened}) {
    const sum = cartItems.map(item => item.price).reduce((acc, item) => acc + item, 0);
    const total = sum + (sum * 0.1)

    return (
        <main className="cart-list">
            <h2 className="cart-list__heading">{cartItems.length>0?`You haved saved ${cartItems.length} articles in this cart`:'No articles saved'}</h2>

            {
                cartItems.length>0  ?
                    <ul className="cart-list__list">
                        {
                            cartItems.map((item, index) => {
                            {   
                                item.id = index}
                                return <CartItem key={index} item={item} handleRemoveItemFromCart={handleRemoveItemFromCart}></CartItem>
                            })
                        }
                    </ul> :
                    <h3 className="cart-list__empty">This cart is empty</h3>
            }

            <div className="cart-list__payment">
                <h2 className="cart-list__total"> Your total including taxes is {total.toFixed(2)}</h2>
                <button className="cart-list__button" onClick={handleSuccessfulModalOpened}>Purchase</button>
            </div>
        </main>
    )
}

export default CartItemList