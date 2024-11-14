import './UpdateForm.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';
import { useState, useEffect } from 'react';

function UpdateForm({modalOpened, handleModalClosed, selectedCard, handleUpdateProductSubmit}) {
    const [name, setName] = useState(selectedCard.name);
    const [price, setPrice] = useState(selectedCard.price);
    const [imageUrl, setImageUrl] = useState(selectedCard.image);
    const [nameInputValid, setNameInputValid] = useState(false);
    const [priceInputValid, setPriceInputValid] = useState(false);
    const [imageInputValid, setImageInputValid] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [imageErrorMessage, setImageErrorMessage] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleUpdateProductSubmit(selectedCard._id, name, price, imageUrl);
    } 

    const handleNameInput = (evt) => {
        setName(evt.target.value);
        console.log(evt.target.value)

        if(evt.target.checkValidity()) {
            setNameInputValid(true);
            setNameErrorMessage('')
        } else {
            setNameInputValid(false);
            setNameErrorMessage(evt.target.validationMessage);
        }
    }

    const handlePriceInput = (evt) => {
        setPrice(evt.target.value);

        if(evt.target.checkValidity()) {
            setPriceInputValid(true);
            setPriceErrorMessage('')
        } else {
            setPriceInputValid(false);
            setPriceErrorMessage(evt.target.validationMessage);
        }
    }

    const handleImageUrlInput = (evt) => {
        setImageUrl(evt.target.value);

        if(evt.target.checkValidity()) {
            setImageInputValid(true);
            setImageErrorMessage('')
        } else {
            setImageInputValid(false);
            setImageErrorMessage(evt.target.validationMessage);
        }
    }

    const handleResetButton = () => {
        setName("");
        setImageUrl("");
        setPrice("");
    }
    console.log(selectedCard)

    useEffect(() => {
        setName(selectedCard.name);
        setPrice(selectedCard.price);
        setImageUrl(selectedCard.image)
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleModalClosed={handleModalClosed} title="Update product">
            <form className="modal__form" onSubmit={handleSubmit}>
                <fieldset className="modal__fieldset">
                    <label htmlFor='name2' className="modal__label">Name: </label>
                    <input type="text" id="name2" className="modal__input" placeholder="Enter product's name..." value={name} onChange={handleNameInput} required minLength={'3'}></input>
                    <span className="modal__error-message">{nameErrorMessage}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor='price2' className="modal__label">Price: </label>
                    <input type="number" id="price2" className="modal__input" placeholder="Enter product's price..." value={price} onChange={handlePriceInput} min={"1"} max={"10000"} step="0.01" required></input>
                    <p className="modal__error-message">{priceErrorMessage}</p>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor='url2' className="modal__label">Image URL: </label>
                    <input type="url" id="url2" className="modal__input" placeholder="Enter image url..." value={imageUrl} onChange={handleImageUrlInput} required></input>
                    <span className="modal__error-message">{imageErrorMessage}</span>
                </fieldset>

                <button type="submit" className="modal__add-button" disabled={!(name && price && imageUrl)}>Update product</button>
                <button type="reset" className="modal__reset-button" onClick={handleResetButton}>Reset</button>
            </form>
        </ModalWithForm>
    )
}

export default UpdateForm;