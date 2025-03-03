import React from 'react'
import { Box, CloseButton, Container, Icon, Timer, TimerBackground, Title } from './customtoast.styles'
import CloseIcon from '../../../assets/icon-cross.svg'
import IconCheck from '../../../assets/icon-check.svg'

const CustomToast = ({ message = 'Ação realizada com sucesso!', status, closeable = false, closeToast, iconed = false, timed = false }) => {
    return (
        <Container>
            <Box status={status}>
                {iconed &&
                    <Icon
                        src={IconCheck}
                        alt=""
                    />}

                <Title>{message}</Title>

                {closeable &&
                    <CloseButton
                        src={CloseIcon}
                        onClick={() => closeToast(false)}
                        alt=""
                    />}

                {timed &&
                    <TimerBackground>
                        <Timer />
                    </TimerBackground>
                }
            </Box>
        </Container>
    )
}

export default CustomToast