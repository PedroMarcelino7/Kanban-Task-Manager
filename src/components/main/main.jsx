import React from 'react'
import { MainPageBox, NewColumnButton, Title } from './mainPage.styles'

const MainPage = () => {
    return (
        <MainPageBox>
            <Title>
                This board is empty. Create a new column to get started.
            </Title>

            <NewColumnButton>
                + Add New Column
            </NewColumnButton>
        </MainPageBox>
    )
}

export default MainPage