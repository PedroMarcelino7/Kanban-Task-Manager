import React from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'

const Column = ({ title, color }) => {
    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor color={color} />
                <Title>
                    {title} (4)
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