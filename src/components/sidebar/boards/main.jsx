// React
import React, { useEffect, useState } from 'react'
import { getBoardId } from '../../../contexts/BoardIDContext'
import { useBoards } from '../../../contexts/BoardContext'

// Styles
import { Board, BoardsBox, BoardsNav, BoardName, Title } from './boards.styles'

// Components
import Modal from '../../modals/main'
import AddBoardModal from '../../modals/addboard/main'
import DeleteAllBoardsModal from '../../modals/deleteallboards/main'
import Loading from '../../../pages/loading/main'

// UI Components
import IconedButton from '../../../ui/buttons/iconedButton/main'

// Images | Icons
import BoardIcon from '../../../assets/icon-board.svg'
import BoardIconSelected from '../../../assets/icon-board-selected.svg'
import NewBoardIcon from '../../../assets/icon-new-board.svg'
import DeleteIcon from '../../../assets/icon-delete.svg'

//
//
//
const Boards = () => {
    //
    //
    // Variables
    const { boardId, updateBoardId, getFirstBoardId } = getBoardId()

    const { boards } = useBoards()

    let board = boards.find(board => board.board_id === boardId) || null

    const [selectedBoard, setSelectedBoard] = useState(board)

    const [showAddNewBoardModal, setShowAddNewBoardModal] = useState(false)
    const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false)

    // Handle Submit

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Selected Board [Boards component]:', selectedBoard)
        console.log('>>> Boards [Boards component]:', boards)
    }, [selectedBoard])

    //
    //
    // Other Functions
    const changeSelectedBoard = (board) => {
        updateBoardId(board.board_id)
        setSelectedBoard(board)
    }

    useEffect(() => {
        getFirstBoardId()
    }, [board])

    useEffect(() => {
        board = boards.find(board => board.board_id === boardId)
        setSelectedBoard(board)
    }, [boardId, boards])

    //
    //
    //

    return (
        <>
            <BoardsBox>
                <Title>ALL BOARDS ({boards.length})</Title>

                <BoardsNav>
                    {boards.map((board, index) => (
                        <Board key={index}
                            className={selectedBoard && board.board_name === selectedBoard.board_name ? 'selected' : ''}
                            onClick={() => changeSelectedBoard(board)}
                        >
                            <img src={selectedBoard && board.board_name === selectedBoard.board_name ? BoardIconSelected : BoardIcon} alt="" />
                            <BoardName>{board.board_name}</BoardName>
                        </Board>
                    ))}

                    <Board onClick={() => setShowAddNewBoardModal(true)}>
                        <img src={NewBoardIcon} alt="" />
                        <BoardName className='new-board'>+ Create New Board</BoardName>
                    </Board>
                </BoardsNav>

                <IconedButton
                    label='Delete All Boards'
                    icon={DeleteIcon}
                    position='end'
                    marginTop={true}
                    size='small'
                    onClick={() => setShowDeleteBoardModal(true)}
                />
            </BoardsBox>

            {showAddNewBoardModal &&
                <Modal closeModal={setShowAddNewBoardModal}>
                    <AddBoardModal />
                </Modal>}

            {showDeleteBoardModal &&
                <Modal closeModal={setShowDeleteBoardModal}>
                    <DeleteAllBoardsModal />
                </Modal>}
        </>
    )
}

export default Boards