import React from 'react'
import { Box, Container, Timer, TimerBackground, Title } from './timedtoast.styles'

const TimedToast = ({ message = 'Ação realizada com sucesso!', status }) => {
    return (
        <Container>
            <Box status={status}>
                <Title>{message}</Title>

                <TimerBackground>
                    <Timer />
                </TimerBackground>
            </Box>
        </Container>
    )
}

export default TimedToast