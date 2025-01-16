import React, { useState } from 'react'
import { ActionsBox, HeaderBox, NewTaskButton, Title, Options } from './header.styles'
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'
import Modal from '../modals/main'
import AddTaskModal from '../modals/addtask/main'

const Header = () => {
    const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)

    return (
        <>
            <HeaderBox>
                <Title>
                    Platform Launch
                </Title>

                <ActionsBox>
                    <NewTaskButton onClick={() => setShowAddNewTaskModal(true)}>+ Add New Task</NewTaskButton>

                    <Options src={OptionsIcon} alt="" />
                </ActionsBox>
            </HeaderBox>

            {showAddNewTaskModal &&
                <Modal>
                    <AddTaskModal />
                </Modal>
            }
        </>
    )
}

export default Header