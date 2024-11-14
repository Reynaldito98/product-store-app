import './ConfirmationModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import '../ModalWithForm/ModalWithForm.css';

function ConfirmationModal({modalOpened, handleModalClosed, selectedCard, handleDeleteProduct}) {
    return (
        <ModalWithForm modalOpened={modalOpened} handleModalClosed={handleModalClosed} title="Are you sure you want to delete this product">
            <button className="modal__yes-delete-btn" onClick={()=>handleDeleteProduct(selectedCard._id)}>Yes, delete it</button>
            <button className="modal__no-delete-btn" onClick={handleModalClosed}>Cancel</button>
        </ModalWithForm>
    )
}

export default ConfirmationModal;