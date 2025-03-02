import React from 'react'
import { Box, Container, Title } from './defaulttoast.styles'

const DefaultToast = ({ message = 'Ação realizada com sucesso!', status }) => {
    return (
        <Container>
            <Box status={status}>
                <Title>{message}</Title>
            </Box>
        </Container>
    )
}

export default DefaultToast