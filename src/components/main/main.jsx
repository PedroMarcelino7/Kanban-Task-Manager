// React
import React, { useEffect, useState } from 'react'
import { getBoardId } from '../../contexts/BoardIDContext'
import { useBoards } from '../../contexts/BoardContext'
import { useColumns } from '../../contexts/ColumnContext'

// Styles
import { Container, MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'

// Components
import Loading from '../loading/main'
import BoardEmpty from './boardempty/main'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Modal from '../modals/main'
import AddColumnModal from '../modals/addcolumn/main'
import AddBoardModal from '../modals/addboard/main'

// UI Components

// Images | Icons

//
//
//
const MainPage = () => {
    //
    //
    // Variables
    const { boardId } = getBoardId()

    const { boards } = useBoards()
    const { columns } = useColumns()

    const board = boards.find(board => board.board_id === boardId) || 0
    const columnsInBoard = columns.filter(column => column.board_id === board.board_id)

    const [loading, setLoading] = useState(false)
    const [showAddColumnModal, setShowAddColumnModal] = useState(false)
    const [showAddBoardModal, setShowAddBoardModal] = useState(false)

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Board [Main component]:', board)
        console.log('>>> Boards [Main component]:', boards)
        console.log('>>> Columns [Main component]:', columns)
        console.log('>>> Board ID Context [Main component]:', boardId)
    }, [])

    //
    //
    // Other Functions
    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    //
    //
    //
    return (
        <Container>
            {!boards || boards.length === 0
                ? <MainPageContainer>
                    <MainPageEmptyBox>
                        <Title>
                            Create a board to get started.
                        </Title>

                        <NewColumnButton onClick={() => setShowAddBoardModal(true)}>
                            + Add New Board
                        </NewColumnButton>
                    </MainPageEmptyBox>
                </MainPageContainer>
                : <MainPageContainer>
                    {columnsInBoard.length !== 0
                        ? <MainPageBox>
                            {columnsInBoard.map((column, index) => (
                                <Column key={index}
                                    column={column}
                                />
                            ))}
                            <NewColumn onClick={setShowAddColumnModal} />
                        </MainPageBox>
                        : <BoardEmpty onClick={setShowAddColumnModal} />
                    }
                </ MainPageContainer>
            }

            {showAddBoardModal &&
                <Modal closeModal={setShowAddBoardModal}>
                    <AddBoardModal boardId={boardId} />
                </Modal>}

            {showAddColumnModal &&
                <Modal closeModal={setShowAddColumnModal}>
                    <AddColumnModal boardId={boardId} />
                </Modal>}
        </Container>
    )
}


export default MainPage