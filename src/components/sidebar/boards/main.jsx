import React, { useEffect, useState } from 'react'
import { Board, BoardsBox, BoardsNav, BoardName, Title } from './boards.styles'
import BoardIcon from '../../../assets/icon-board.svg'
import BoardIconSelected from '../../../assets/icon-board-selected.svg'
import NewBoardIcon from '../../../assets/icon-new-board.svg'
import Modal from '../../modals/main'
import AddBoardModal from '../../modals/addboard/main'
import { getBoardId } from '../../../contexts/BoardContext'

const Boards = ({ boards }) => {
    const { updateBoardId } = getBoardId()
    const [selectedBoard, setSelectedBoard] = useState(boards[0])
    const [showAddNewBoardModal, setShowAddNewBoardModal] = useState(false)

    const changeSelectedBoard = (board) => {
        updateBoardId(board.board_id)
        setSelectedBoard(board)
    }

    useEffect(() => {
        console.log('>>> Selected Board [Boards component]:', selectedBoard)
        console.log('>>> Boards [Boards component]:', boards)
    }, [selectedBoard])

    return (
        <>
            <BoardsBox>
                <Title>ALL BOARDS ({boards.length})</Title>

                <BoardsNav>
                    {boards.map((board, index) => (
                        <Board key={index}
                            className={board.board_name === selectedBoard.board_name ? 'selected' : ''}
                            onClick={() => changeSelectedBoard(board)}
                        >
                            <img src={board.board_name === selectedBoard.board_name ? BoardIconSelected : BoardIcon} alt="" />
                            <BoardName>{board.board_name}</BoardName>
                        </Board>
                    ))}

                    <Board onClick={() => setShowAddNewBoardModal(true)}>
                        <img src={NewBoardIcon} alt="" />
                        <BoardName className='new-board'>+ Create New Board</BoardName>
                    </Board>
                </BoardsNav>
            </BoardsBox>

            {showAddNewBoardModal &&
                <Modal closeModal={setShowAddNewBoardModal}>
                    <AddBoardModal />
                </Modal>}
        </>
    )
}

export default Boards