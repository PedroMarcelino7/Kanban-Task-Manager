import React, { useEffect, useState } from 'react'
import { appData } from '../../contexts/AppContext'
import { useParams } from 'react-router-dom'
import { ActionsBox, HeaderBox, NewTaskButton, Title, Options, OptionSection, OptionsPopUp, Option } from './header.styles'
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'
import Modal from '../modals/main'
import AddTaskModal from '../modals/addtask/main'
import EditBoardModal from '../modals/editboard/main'
import DeleteBoardModal from '../modals/deleteboard/main'

const Header = () => {
    const { board_id } = useParams()
    const { data } = appData()
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false)
    const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)
    const [showEditBoardModal, setShowEditBoardModal] = useState(false)
    const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false)

    return (
        <>
            <HeaderBox>
                <Title>
                    Platform Launch
                </Title>

                <ActionsBox>
                    <NewTaskButton onClick={() => setShowAddNewTaskModal(true)}>+ Add New Task</NewTaskButton>

                    <OptionSection>
                        <Options onClick={() => setShowOptionsPopUp(!showOptionsPopUp)} src={OptionsIcon} alt="" />

                        <OptionsPopUp className={showOptionsPopUp ? "show" : ""}>
                            <Option onClick={() => setShowEditBoardModal(true)}>Edit Board</Option>
                            <Option onClick={() => setShowDeleteBoardModal(true)} className='delete'>Delete Board</Option>
                        </OptionsPopUp>
                    </OptionSection>
                </ActionsBox>
            </HeaderBox>

            {showAddNewTaskModal &&
                <Modal closeModal={setShowAddNewTaskModal}>
                    <AddTaskModal data={data} board_id={board_id} />
                </Modal>
            }
            {showEditBoardModal &&
                <Modal closeModal={setShowEditBoardModal}>
                    <EditBoardModal data={data} board_id={board_id} />
                </Modal>
            }
            {showDeleteBoardModal &&
                <Modal closeModal={setShowDeleteBoardModal}>
                    <DeleteBoardModal board_id={board_id} closeModal={setShowDeleteBoardModal} />
                </Modal>
            }
        </>
    )
}

export default Header