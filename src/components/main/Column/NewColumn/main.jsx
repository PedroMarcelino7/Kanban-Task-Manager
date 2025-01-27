import React from 'react'
import { NewColumnBox, Title } from './newcolumn.styles'

const NewColumn = ({ onClick }) => {
    return (
        <NewColumnBox onClick={() => onClick(true)}>
            <Title>
                + New Column
            </Title>
        </NewColumnBox>
    )
}

export default NewColumn