import './CreateForm.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';
import { useState, useEffect } from 'react';

function CreateForm({modalOpened, handleModalClosed, handleSubmitForm}) {
    const [name2, setName2] = useState('');
    const [price2, setPrice2] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [nameInputValid2, setNameInputValid2] = useState(false);
    const [priceInputValid2, setPriceInputValid2] = useState(false);
    const [imageInputValid2, setImageInputValid2] = useState(false);
    const [nameErrorMessage2, setNameErrorMessage2] = useState('');
    const [priceErrorMessage2, setPriceErrorMessage2] = useState('');
    const [imageErrorMessage2, setImageErrorMessage2] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSubmitForm(name2, price2, imageUrl2);
    } 

    const handleNameInput = (evt) => {
        setName2(evt.target.value);

        if(evt.target.checkValidity()) {
            setNameInputValid2(true);
            setNameErrorMessage2('')
        } else {
            setNameInputValid2(false);
            setNameErrorMessage2(evt.target.validationMessage);
        }
    }

    const handlePriceInput = (evt) => {
        setPrice2(evt.target.value);

        if(evt.target.checkValidity()) {
            setPriceInputValid2(true);
            setPriceErrorMessage2('')
        } else {
            setPriceInputValid2(false);
            setPriceErrorMessage2(evt.target.validationMessage);
        }
    }

    const handleImageUrlInput = (evt) => {
        setImageUrl2(evt.target.value);

        if(evt.target.checkValidity()) {
            setImageInputValid2(true);
            setImageErrorMessage2('')
        } else {
            setImageInputValid2(false);
            setImageErrorMessage2(evt.target.validationMessage);
        }
    }

    const handleResetButton = () => {
        setName2("");
        setImageUrl2("");
        setPrice2("");
    }

    useEffect(() => {
        setName2("");
        setImageUrl2("");
        setPrice2("");
    }, [modalOpened])

    return (
        <ModalWithForm modalOpened={modalOpened} handleModalClosed={handleModalClosed} title="Create Product">
            <form className="modal__form" onSubmit={handleSubmit}>
                <fieldset className="modal__fieldset">
                    <label htmlFor='name' className="modal__label">Name: </label>
                    <input type="text" id="name" className="modal__input" placeholder="Enter product's name..." value={name2} onChange={handleNameInput} required minLength={'3'}></input>
                    <span className="modal__error-message">{nameErrorMessage2}</span>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor='price' className="modal__label">Price: </label>
                    <input type="number" id="price" className="modal__input" placeholder="Enter product's price..." value={price2} onChange={handlePriceInput} min={"1"} max={"10000"} step="0.01" required></input>
                    <p className="modal__error-message">{priceErrorMessage2}</p>
                </fieldset>

                <fieldset className="modal__fieldset">
                    <label htmlFor='url' className="modal__label">Image URL: </label>
                    <input type="url" id="url" className="modal__input" placeholder="Enter image url..." value={imageUrl2} onChange={handleImageUrlInput} required></input>
                    <span className="modal__error-message">{imageErrorMessage2}</span>
                </fieldset>

                <button type="submit" className="modal__add-button" disabled={!(nameInputValid2 && priceInputValid2 && imageInputValid2)}>Add product</button>
                <button type="reset" className="modal__reset-button" onClick={handleResetButton}>Reset</button>
            </form>
        </ModalWithForm>
    )
}

export default CreateForm;