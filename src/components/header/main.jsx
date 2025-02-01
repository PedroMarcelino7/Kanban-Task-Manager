import React, { useEffect, useState } from 'react'
import { appData } from '../../contexts/AppContext'
import { useParams } from 'react-router-dom'
import { ActionsBox, HeaderBox, NewTaskButton, Title, Options } from './header.styles'
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'
import Modal from '../modals/main'
import AddTaskModal from '../modals/addtask/main'

const Header = () => {
    const { board_id } = useParams()
    const { data } = appData()
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
                <Modal closeModal={setShowAddNewTaskModal}>
                    <AddTaskModal data={data} board_id={board_id} />
                </Modal>
            }
        </>
    )
}

export default Header