import React, { useEffect, useState } from 'react'
import { Container, MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import { useParams } from 'react-router-dom'
import { appData } from '../../contexts/AppContext'
import AddColumnModal from '../modals/addcolumn/main'
import AddBoardModal from '../modals/addboard/main'
import Modal from '../modals/main'
import BoardEmpty from './boardempty/main'
import { getBoardId } from '../../contexts/BoardContext'
import DefaultToast from '../../ui/toasts/defaulttoast/main'
import TimedToast from '../../ui/toasts/timedtoast/main'
import CloseableToast from '../../ui/toasts/closeabletoast/main'
import IconedToast from '../../ui/toasts/iconedtoast/main'
import CustomToast from '../../ui/toasts/customtoast/main'

const MainPage = ({ data }) => {
    const { boardId } = getBoardId()
    const selectedBoard = data.find(board => board.board_id === Number(boardId)) || data[0]
    const [loading, setLoading] = useState(false)
    const [showAddColumnModal, setShowAddColumnModal] = useState(false)
    const [showAddBoardModal, setShowAddBoardModal] = useState(false)

    useEffect(() => {
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