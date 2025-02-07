import React, { useEffect, useState } from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import { useParams } from 'react-router-dom'
import { appData } from '../../contexts/AppContext'
import AddColumnModal from '../modals/addcolumn/main'
import AddBoardModal from '../modals/addboard/main'
import Modal from '../modals/main'
import BoardEmpty from './boardempty/main'

const MainPage = () => {
    const { data } = appData()
    const { board_id } = useParams()
    const [loading, setLoading] = useState(false)
    const [showAddColumnModal, setShowAddColumnModal] = useState(false)
    const [showAddBoardModal, setShowAddBoardModal] = useState(false)

    useEffect(() => {
        console.log('>>> Board ID [Main component]:', board_id)
        console.log('>>> App Data (boards) [Main component]:', data)
        console.log('>>> Board Data [Main component]:', data[board_id - 1])
    }, [board_id])

    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    return (
        <>
            {data.length === 0
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
                    {data[board_id - 1].columns.length !== 0
                        ? <MainPageBox>
                            {data[board_id - 1].columns.map((column, index) => (
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

            {
                showAddColumnModal &&
                <Modal closeModal={setShowAddColumnModal}>
                    <AddColumnModal board_id={board_id} />
                </Modal>
            }
            {
                showAddBoardModal &&
                <Modal closeModal={setShowAddBoardModal}>
                    <AddBoardModal boardId={board_id} />
                </Modal>
            }
        </>
    )
}

export default MainPage