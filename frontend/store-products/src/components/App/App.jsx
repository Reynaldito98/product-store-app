import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import CreateForm from '../CreateForm/CreateForm';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import UpdateForm from '../UpdateForm/UpdateForm';
import CartHeader from '../CartHeader/CartHeader';
import CartItemList from '../CartItemList/CartItemList';
import SuccessfulPurchase from '../SuccessfulPurchase/SuccessfulPurchase';
import {getProducts, createProduct, deleteProduct, updateProduct} from '../../utils/api.js';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [createModalOpened, setCreateModalOpened] = useState(false);
  const [updateModalOpened, setUpdateModalOpened] = useState(false);
  const [successfulModalOpened, setSuccessfulModalOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleModalOpened = () => {
    setCreateModalOpened(true);
  }

  const handleModalClosed = () => {
    setCreateModalOpened(false);
  }

  const handleAddItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem('cart', JSON.stringify([...cartItems, item]));
  }

  const handleDeleteModalOpened = (item) => {
    setSelectedCard(item);
    setDeleteModalOpened(true);
  }

  const handleDeleteModalClosed = () => {
    setDeleteModalOpened(false);
  }

  const handleSuccessfulModalOpened = () => {
    setSuccessfulModalOpened(true);
    setCartItems([]);
  }

  const handleSuccessfulModalClosed = () => {
    setSuccessfulModalOpened(false)
  }

  const handleUpdateModalOpened = (item) => {
    setUpdateModalOpened(true);
    setSelectedCard(item);
  }

  const handleUpdateModalClosed = () => {
    setUpdateModalOpened(false);
  }

  const handleRemoveItemFromCart = (i) => {
    setCartItems(cartItems.filter(item => item.id!==i.id))
  }


  const handleSubmitForm = (name, price, image) => {
    createProduct(name, price, image)
      .then(result => {
        setProducts([...products, result.data]);
        setCreateModalOpened(false);
      }).catch(err => console.error(err))
  }

  const handleUpdateProductSubmit = (id, name, price, image) => {
    updateProduct(id, name, price, image)
      .then(result => {
        products[products.findIndex(item => item._id===id)].name = name;
        products[products.findIndex(item => item._id===id)].price = Number(price);
        products[products.findIndex(item => item._id===id)].image = image;
        setUpdateModalOpened(false);
      }).catch(err=>console.error(err))
  }

  const handleDeleteProduct = id => {
    deleteProduct(id)
      .then(result => {
        setProducts(products.filter(item => item._id !== id))
        setDeleteModalOpened(false);
      }).catch(err=>console.error(err))
  }


  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data.data);
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('cart'))) {
      setCartItems(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Header handleModalOpened={handleModalOpened} title="Welcome to ReyStore!"></Header>}></Route>
        <Route path="/cart" element={<CartHeader></CartHeader>}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<MainSection products={products} handleDeleteModalOpened={handleDeleteModalOpened} handleUpdateModalOpened={handleUpdateModalOpened} handleAddItemToCart={handleAddItemToCart} cartItems={cartItems}></MainSection>}>
        </Route>
        <Route path="/cart" element={<CartItemList cartItems={cartItems} handleRemoveItemFromCart={handleRemoveItemFromCart} handleSuccessfulModalOpened={handleSuccessfulModalOpened}></CartItemList>}>
        </Route>
      </Routes>

      <Footer></Footer>
      <CreateForm modalOpened={createModalOpened} handleModalClosed={handleModalClosed} handleSubmitForm={handleSubmitForm}></CreateForm>
      <ConfirmationModal modalOpened={deleteModalOpened} handleModalClosed={handleDeleteModalClosed} handleDeleteProduct={handleDeleteProduct} selectedCard={selectedCard}></ConfirmationModal>
      <UpdateForm modalOpened={updateModalOpened} handleModalClosed={handleUpdateModalClosed} selectedCard={selectedCard} handleUpdateProductSubmit={handleUpdateProductSubmit}></UpdateForm>
      <SuccessfulPurchase modalOpened={successfulModalOpened} handleModalClosed={handleSuccessfulModalClosed}></SuccessfulPurchase>
    </div>
  )
}

export default App
