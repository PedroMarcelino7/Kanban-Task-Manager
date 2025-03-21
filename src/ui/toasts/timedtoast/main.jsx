import React, { useEffect, useState } from 'react'
import { Box, Container, Timer, TimerBackground, Title } from './timedtoast.styles'

const TimedToast = ({ message = 'Ação realizada com sucesso!', status, onClose }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => prev + 1)
        }, 50)

        if (progress > 110) {
            clearInterval(interval)
            onClose()
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