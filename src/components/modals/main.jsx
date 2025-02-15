// React
import React from 'react'

// Styles
import { ModalBox, ModalContainer } from './modal.styles'

//
//
//
const Modal = ({ children, closeModal }) => {
    return (
        <ModalContainer onClick={() => closeModal(false)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                {children}
            </ModalBox>
        </ModalContainer>
    )
}

export default Modal