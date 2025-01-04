import React, { useState } from 'react'
import { Board, BoardsBox, BoardsNav, BoardName, Title } from './boards.styles'
import BoardIcon from '../../../assets/icon-board.svg'
import BoardIconSelected from '../../../assets/icon-board-selected.svg'
import NewBoardIcon from '../../../assets/icon-new-board.svg'

const Boards = () => {
    const BoardCount = [
        { title: 'Platform Launch' },
        { title: 'Marketing Plan' },
        { title: 'Roadmap' }
    ]
    const [selectedBoard, setSelectedBoard] = useState(BoardCount[0])

    return (
        <BoardsBox>
            <Title>ALL BOARDS ({BoardCount.length})</Title>

            <BoardsNav>
                {BoardCount.map((board, index) => (
                    <Board key={index}
                        className={board.title === selectedBoard.title ? 'selected' : ''}
                        onClick={() => setSelectedBoard(BoardCount[index])}
                    >
                        <img src={board.title === selectedBoard.title ? BoardIconSelected : BoardIcon} alt="" />
                        <BoardName>{board.title}</BoardName>
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