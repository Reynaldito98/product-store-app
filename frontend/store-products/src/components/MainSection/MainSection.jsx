import "./MainSection.css";
import Card from "../Card/Card";

function MainSection({products, handleDeleteModalOpened, handleUpdateModalOpened, handleAddItemToCart, cartItems}) {
    return (
        <main className="main-section">
            <h2 className="main-section__heading">Current Products</h2>

            {
                products.length>0 ?
                    <ul className="main-section__card-list">
                        {
                            products.map(item => {
                                return (
                                    <Card key={item._id} item={item} handleDeleteModalOpened={handleDeleteModalOpened} handleUpdateModalOpened={handleUpdateModalOpened} handleAddItemToCart={handleAddItemToCart} cartItems={cartItems}></Card>
                                )
                            })
                        }
                    </ul> :
                    <h3 className="main-section__empty">There are no products right now at this store</h3>
            }
        </main>
    )
}

export default MainSection;