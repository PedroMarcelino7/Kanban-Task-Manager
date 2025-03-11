import React from 'react'
import { Box, Container, Icon, Title } from './iconedtoaststyles'
import IconCheck from '../../../assets/icon-check.svg'

const IconedToast = ({ message = 'Ação realizada com sucesso!', status, onClose }) => {
    return (
        <Container>
            <Box status={status}>
                <Icon src={IconCheck} alt="" />
                <Title>{message}</Title>
            </Box>
        </Container>
    )
}

export default IconedToast