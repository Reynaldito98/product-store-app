import './ModalWithForm.css';
import closeButton from "../../images/Group 119.png";
import { useEffect, useState } from 'react';

function ModalWithForm({modalOpened, handleModalClosed, title, children}) {
    const handleRemoteClick = (evt) => {
        if(evt.target===evt.currentTarget) {
            evt.preventDefault();
            handleModalClosed();
        }
    }

    useEffect(() => {
        if (!modalOpened) return;
        const handleEscClose = (evt) => {
            if(evt.key==='Escape') {
                evt.preventDefault();
                handleModalClosed();
            }
        }
        window.addEventListener('keydown', handleEscClose);
        return () => {
            window.removeEventListener("keydown", handleEscClose);
        };
    }, [modalOpened]);



    return (
        <div className={`modal ${modalOpened?'modal_opened':''}`} onMouseDown={handleRemoteClick}>
            <div className="modal__container">
                <h2 className="modal__heading">{title}</h2>

                {children}

                <button className="modal__close-btn" onClick={handleModalClosed}><img src={closeButton} alt="close button" className="modal__close-icon"></img></button>
            </div>
        </div>
    )
}

export default ModalWithForm;