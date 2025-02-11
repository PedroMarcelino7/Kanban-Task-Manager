import React, { useEffect, useState } from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'

const Column = ({ column, data }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('>>> Column ID [Column component]:', column.column_id)
        console.log('>>> Column [Column component]:', column)
        console.log('>>> Data [Column component]:', data)
    }, [])

    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor color={column.column_color} />
                <Title>
                    {column.column_name} ({column.tasks.length})
                </Title>
            </TitleBox>

            <CardsContainer>
                {column.tasks.map((task, index) => (
                    <Card key={index}
                        task={task}
                        column={column}
                        data={data}
                    />
                ))}
            </CardsContainer>
        </ColumnBox>
    )
}

export default Column