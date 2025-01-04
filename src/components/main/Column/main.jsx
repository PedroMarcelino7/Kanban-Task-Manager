import React from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'

const Column = () => {
    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor />
                <Title>
                    TODO (4)
                </Title>
            </TitleBox>

            <CardsContainer>
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsContainer>
        </ColumnBox>
    )
}

export default Column