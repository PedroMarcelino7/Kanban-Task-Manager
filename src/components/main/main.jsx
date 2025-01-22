import React, { useEffect, useState } from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import { useParams } from 'react-router-dom'
import { appData } from '../../contexts/AppContext'

const MainPage = () => {
    const { data } = appData()
    const { board_id } = useParams()
    const [loading, setLoading] = useState(false)
    const [columns, setColumns] = useState([])

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
        <MainPageContainer>
            <MainPageBox>
                {/* {columns.map((column, index) => (
                    <Column key={index}
                        column={data}
                    />
                ))} */}
                {data[board_id - 1].columns.map((column, index) => (
                    <Column key={index}
                        column={column}
                    />
                ))}
                <NewColumn />
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
    )
}

export default MainPage