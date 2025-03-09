import React, { useEffect, useState } from 'react'
import { Container, MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import AddColumnModal from '../modals/addcolumn/main'
import AddBoardModal from '../modals/addboard/main'
import Modal from '../modals/main'
import BoardEmpty from './boardempty/main'
import { getBoardId } from '../../contexts/BoardIDContext'
import { useBoards } from '../../contexts/BoardContext'
import { useColumns } from '../../contexts/ColumnContext'
import { useTasks } from '../../contexts/TaskContext'
import { useSubtasks } from '../../contexts/SubtaskContext'

const MainPage = ({ data }) => {
    //
    const { boards, refreshBoards } = useBoards()
    const { columns, refreshColumns } = useColumns()
    const { tasks, refreshTasks } = useTasks()
    const { subtasks, refreshSubasks } = useSubtasks()
    //

    const { boardId } = getBoardId()
    const selectedBoard = data.find(board => board.board_id === Number(boardId)) || data[0]
    const [loading, setLoading] = useState(false)
    const [showAddColumnModal, setShowAddColumnModal] = useState(false)
    const [showAddBoardModal, setShowAddBoardModal] = useState(false)

    useEffect(() => {
        //
        console.log('** Boards:', boards)
        console.log('** Columns:', columns)
        console.log('** Tasks:', tasks)
        console.log('** Subtasks:', subtasks)
        //
        console.log('>>> Board ID Context [Main component]:', boardId)
        console.log('>>> App Data (boards) [Main component]:', data)
        console.log('>>> Data Length [Main component]:', data.length)
        console.log('>>> Selected Board [Main component]:', selectedBoard)
    }, [])

    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    return (
        <Container>
            {!selectedBoard || data.length === 0
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
                    {selectedBoard.columns.length !== 0
                        ? <MainPageBox>
                            {selectedBoard.columns.map((column, index) => (
                                <Column key={index}
                                    column={column}
                                    data={data}
                                />
                            ))}
                            <NewColumn onClick={setShowAddColumnModal} />
                        </MainPageBox>
                        : <BoardEmpty onClick={setShowAddColumnModal} />
                    }
                </ MainPageContainer>
            }

            {showAddColumnModal &&
                <Modal closeModal={setShowAddColumnModal}>
                    <AddColumnModal boardId={boardId} />
                </Modal>}

            {showAddBoardModal &&
                <Modal closeModal={setShowAddBoardModal}>
                    <AddBoardModal boardId={boardId} />
                </Modal>}
        </Container>
    )
}


export default MainPage