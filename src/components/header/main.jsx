// React
import React, { useEffect, useState } from 'react'
import { getBoardId } from '../../contexts/BoardIDContext'
import { useBoards } from '../../contexts/BoardContext'
import { useColumns } from '../../contexts/ColumnContext'

// Styles
import { ActionsBox, HeaderBox, Title, Options, OptionSection, OptionsPopUp, Option } from './header.styles'

// Components
import Modal from '../modals/main'
import AddTaskModal from '../modals/addtask/main'
import EditBoardModal from '../modals/editboard/main'
import DeleteBoardModal from '../modals/deleteboard/main'

// UI Components
import DefaultButton from '../../ui/buttons/defaultButton/main'

// Images | Icons
import OptionsIcon from '../../assets/icon-vertical-ellipsis.svg'

//
//
//
const Header = () => {
    //
    //
    // Variables
    const { boardId } = getBoardId()

    const { boards } = useBoards()
    const { columns } = useColumns()

    const board = boards.find(board => board.board_id === boardId) || 0
    const columnsInBoard = columns.filter(column => column.board_id === boardId)

    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false)
    const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)
    const [showEditBoardModal, setShowEditBoardModal] = useState(false)
    const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false)

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Board [Header]:', board)
        console.log('>>> Board ID [Header]:', boardId)
    }, [])

    //
    //
    // Other Functions
    const handleShowAddNewTaskModal = () => {
        setShowAddNewTaskModal(true)
    }

    //
    //
    //
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
                        disabled={!board || columnsInBoard.length === 0}
                    />

                    <OptionSection>
                        <Options onClick={() => setShowOptionsPopUp(!board ? '' : !showOptionsPopUp)} src={OptionsIcon} alt="" />

                        <OptionsPopUp className={showOptionsPopUp ? "show" : ""}>
                            <Option onClick={() => setShowEditBoardModal(true)}>Edit Board</Option>
                            <Option onClick={() => setShowDeleteBoardModal(true)} className='delete'>Delete Board</Option>
                        </OptionsPopUp>
                    </OptionSection>
                </ActionsBox>
            </HeaderBox>

            {showAddNewTaskModal &&
                <Modal closeModal={setShowAddNewTaskModal}>
                    <AddTaskModal board={board} />
                </Modal>}

            {showEditBoardModal &&
                <Modal closeModal={setShowEditBoardModal}>
                    <EditBoardModal board={board} />
                </Modal>}

            {showDeleteBoardModal &&
                <Modal closeModal={setShowDeleteBoardModal}>
                    <DeleteBoardModal board={board} />
                </Modal>}
        </>
    )
}

export default Header