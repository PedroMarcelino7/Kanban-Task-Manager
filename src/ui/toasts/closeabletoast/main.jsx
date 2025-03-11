import React from 'react'
import { Box, CloseButton, Container, Title } from './closeabletoast.styles'
import CloseIcon from '../../../assets/icon-cross.svg'

const CloseableToast = ({ message = 'Ação realizada com sucesso!', status, onClose }) => {
    return (
        <Container>
            <Box status={status}>
                <Title>{message}</Title>
                <CloseButton src={CloseIcon} onClick={onClose} alt='' />
            </Box>
        </Container>
    )
}

export default CloseableToast