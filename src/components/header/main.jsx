import React, { useEffect, useState } from 'react'
import { appData } from '../../contexts/AppContext'
import { useParams } from 'react-router-dom'
import { ActionsBox, HeaderBox, NewTaskButton, Title, Options, OptionSection, OptionsPopUp, Option } from './header.styles'
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'
import Modal from '../modals/main'
import AddTaskModal from '../modals/addtask/main'
import EditBoardModal from '../modals/editboard/main'
import DeleteBoardModal from '../modals/deleteboard/main'
import { getBoardId } from '../../contexts/BoardContext'
import DefaultButton from '../../ui/buttons/defaultButton/main'

const Header = ({ data }) => {
    const { boardId } = getBoardId()
    const selectedBoard = data.find(board => board.board_id === Number(boardId)) || data[0]
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false)
    const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)
    const [showEditBoardModal, setShowEditBoardModal] = useState(false)
    const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false)

    useEffect(() => {
        console.log('>>> Selected Board [Header]:', selectedBoard)
        console.log('>>> Data Header [Header]:', data)
        console.log('>>> Board ID [Header]:', boardId)
    }, [])

    const handleShowAddNewTaskModal = () => {
        setShowAddNewTaskModal(true)
    }

    return (
        <>
            <HeaderBox>
                <Title>
                    Platform Launch
                </Title>

                <ActionsBox>
                    <DefaultButton
                        label='+ Add New Task'
                        type='submit'
                        onClick={handleShowAddNewTaskModal}
                        disabled={!selectedBoard || selectedBoard.columns.length === 0}
                    />

                    <OptionSection>
                        <Options onClick={() => setShowOptionsPopUp(!selectedBoard ? '' : !showOptionsPopUp)} src={OptionsIcon} alt="" />

                        <OptionsPopUp className={showOptionsPopUp ? "show" : ""}>
                            <Option onClick={() => setShowEditBoardModal(true)}>Edit Board</Option>
                            <Option onClick={() => setShowDeleteBoardModal(true)} className='delete'>Delete Board</Option>
                        </OptionsPopUp>
                    </OptionSection>
                </ActionsBox>
            </HeaderBox>

            {showAddNewTaskModal &&
                <Modal closeModal={setShowAddNewTaskModal}>
                    <AddTaskModal board={selectedBoard} />
                </Modal>}

            {showEditBoardModal &&
                <Modal closeModal={setShowEditBoardModal}>
                    <EditBoardModal board={selectedBoard} />
                </Modal>}

            {showDeleteBoardModal &&
                <Modal closeModal={setShowDeleteBoardModal}>
                    <DeleteBoardModal board={selectedBoard} />
                </Modal>}
        </>
    )
}

export default Header