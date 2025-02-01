import React, { useState } from 'react'
import { MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './boardEmpty.styles'
import Loading from '../../loading/main'

const BoardEmpty = ({ onClick }) => {
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

                <NewColumnButton onClick={() => onClick(true)}>
                    + Add New Column
                </NewColumnButton>
            </MainPageEmptyBox>
        </MainPageContainer>
    )
}

export default BoardEmpty