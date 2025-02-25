// React
import React, { createContext, useContext } from 'react'

// Styles
import { ModalBox, ModalContainer } from './modal.styles'

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

//
//
//
const Modal = ({ children, closeModal }) => {
    return (
        <ModalContext.Provider value={{ closeModal }}>
            <ModalContainer onClick={() => closeModal(false)}>
                <ModalBox onClick={(e) => e.stopPropagation()}>
                    {children}
                </ModalBox>
            </ModalContainer>
        </ModalContext.Provider>
    )
}

export default Modal