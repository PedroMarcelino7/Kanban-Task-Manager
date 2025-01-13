import React, { useState } from 'react'
import { Board, BoardsBox, BoardsNav, BoardName, Title } from './boards.styles'
import BoardIcon from '../../../assets/icon-board.svg'
import BoardIconSelected from '../../../assets/icon-board-selected.svg'
import NewBoardIcon from '../../../assets/icon-new-board.svg'

const Boards = ({ boards }) => {
    const [selectedBoard, setSelectedBoard] = useState(boards[0])

    return (
        <BoardsBox>
            <Title>ALL BOARDS ({boards.length})</Title>

            <BoardsNav>
                {boards.map((board, index) => (
                    <Board key={index}
                        className={board.board_name === selectedBoard.board_name ? 'selected' : ''}
                        onClick={() => setSelectedBoard(board)}
                    >
                        <img src={board.board_name === selectedBoard.board_name ? BoardIconSelected : BoardIcon} alt="" />
                        <BoardName>{board.board_name}</BoardName>
                    </Board>
                ))}

                <Board>
                    <img src={NewBoardIcon} alt="" />
                    <BoardName className='new-board'>+ Create New Board</BoardName>
                </Board>
            </BoardsNav>
        </BoardsBox>
    )
}

export default Boards