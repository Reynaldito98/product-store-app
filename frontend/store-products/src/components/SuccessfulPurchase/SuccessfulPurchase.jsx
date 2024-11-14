import './SuccessfulPurchase.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function SuccessfulPurchase({modalOpened, handleModalClosed}) {
    return <ModalWithForm title="🥳Your purchase has been successful. Enj🥳y everything y🥳u b🥳ught!!🥳" modalOpened={modalOpened} handleModalClosed={handleModalClosed}>
                    
           </ModalWithForm>
}

export default SuccessfulPurchase;