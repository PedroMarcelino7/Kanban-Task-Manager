import React, { useEffect, useState } from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'
import { useParams } from 'react-router-dom'

const MainPage = () => {
    const { board_id } = useParams()
    const [loading, setLoading] = useState(false)
    const [columns, setColumns] = useState([])

    const getColumns = async (board_id) => {
        try {
            const response = await fetch(`http://localhost:3001/boards/${board_id}/columns`);
            const data = await response.json();

            console.log('Columns:', data);
            setColumns(data)
            setLoading(false)
        } catch (error) {
            console.error('Erro ao buscar columns:', error);
        }
    };

    useEffect(() => {
        console.log('>>> Board ID [Main component]:', board_id)
        getColumns(board_id)
    }, [board_id])

    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    return (
        <MainPageContainer>
            <MainPageBox>
                {columns.map((column, index) => (
                    <Column key={index}
                        title={column.column_name}
                        color={column.column_color}
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