import React, { useState } from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './boardEmpty.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'
import Loading from '../loading/main'

const MainPage = () => {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (
            <Loading text={'Loading...'} />
        )
    }

    return (
        <MainPageContainer>
            <MainPageEmptyBox>
                <Title>
                    This board is empty. Create a new column to get started.
                </Title>

                <NewColumnButton>
                    + Add New Column
                </NewColumnButton>
            </MainPageEmptyBox>
        </MainPageContainer>
    )
}

export default MainPage