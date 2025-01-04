import React from 'react'
import { MainPageBox, MainPageContainer, MainPageEmptyBox, NewColumnButton, Title } from './mainPage.styles'
import Column from './Column/main'
import NewColumn from './Column/NewColumn/main'

const MainPage = () => {
    return (
        <MainPageContainer>
            <MainPageBox>
                <Column />
                <Column />
                <Column />
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