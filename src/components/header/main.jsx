import React from 'react'
import { ActionsBox, HeaderBox, NewTaskButton, Title, Options } from './header.styles'
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'

const Header = () => {
    return (
        <HeaderBox>
            <Title>
                Platform Launch
            </Title>

            <ActionsBox>
                <NewTaskButton>+ Add New Task</NewTaskButton>

                <Options src={OptionsIcon} alt="" />
            </ActionsBox>
        </HeaderBox>
    )
}

export default Header