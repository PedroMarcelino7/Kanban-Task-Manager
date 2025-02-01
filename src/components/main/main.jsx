import React, { useEffect, useState } from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import { useParams } from 'react-router-dom'
import { appData } from '../../contexts/AppContext'
import AddColumnModal from '../modals/addcolumn/main'
import Modal from '../modals/main'

const MainPage = () => {
    const { data } = appData()
    const { board_id } = useParams()
    const [loading, setLoading] = useState(false)
    const [showAddColumnModal, setShowAddColumnModal] = useState(false)

    useEffect(() => {
        console.log('>>> Board ID [Main component]:', board_id)
        console.log('>>> App Data (boards) [Main component]:', data)
    }, [board_id])

    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    return (
        <>
            <MainPageContainer>
                <MainPageBox>
                    {data[board_id - 1].columns.map((column, index) => (
                        <Column key={index}
                            column={column}
                            data={data}
                        />
                    ))}
                    <NewColumn onClick={setShowAddColumnModal} />
                </MainPageBox>
                {/* <MainPageEmptyBox>
                <Title>
                    This board is empty. Create a new column to get started.
                </Title>

                <NewColumnButton>
                    + Add New Column
                </NewColumnButton>
            </MainPageEmptyBox> */}
            </MainPageContainer>

            {showAddColumnModal &&
                <Modal closeModal={setShowAddColumnModal}>
                    <AddColumnModal board_id={board_id} />
                </Modal>
            }
        </>
    )
}

export default MainPage