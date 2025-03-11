import React, { useEffect, useState } from 'react'
import { Box, Container, Timer, TimerBackground, Title } from './timedtoast.styles'

const TimedToast = ({ message = 'Ação realizada com sucesso!', status }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => prev + 5)
        }, 150)

        if (progress >= 100) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [progress])

    return (
        <Container>
            <Box status={status}>
                <Title>{message}</Title>

                <TimerBackground>
                    <Timer timer={progress} />
                </TimerBackground>
            </Box>
        </Container>
    )
}

export default TimedToast