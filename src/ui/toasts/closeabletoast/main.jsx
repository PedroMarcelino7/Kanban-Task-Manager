import React from 'react'
import { Box, CloseButton, Container, Title } from './closeabletoast.styles'
import CloseIcon from '../../../assets/icon-cross.svg'

const CloseableToast = ({ message = 'Ação realizada com sucesso!', status, closeToast }) => {
    return (
        <Container>
            <Box status={status}>
                <Title>{message}</Title>
                <CloseButton src={CloseIcon} onClick={() => closeToast(false)} alt='' />
            </Box>
        </Container>
    )
}

export default CloseableToast