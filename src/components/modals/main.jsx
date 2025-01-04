import React from 'react'
import { ModalBox, ModalContainer } from './modal.styles'

const Modal = ({ children }) => {
    return (
        <ModalContainer>
            <ModalBox>
                {children}
            </ModalBox>
        </ModalContainer>
    )
}

export default Modal