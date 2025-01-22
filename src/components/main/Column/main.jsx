import React, { useEffect, useState } from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'

const Column = ({ column }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log('>>> Column ID [Column component]:', column.column_id)
        console.log('>>> Data [Column component]:', column) 
    }, [])

    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor color={column.column_color} />
                <Title>
                    {column.column_name} (4)
                </Title>
            </TitleBox>

            <CardsContainer>
                {column.tasks.map((task, index) => (
                    <Card key={index}
                        task={task}
                        column={column}
                    />
                ))}
            </CardsContainer>
        </ColumnBox>
    )
}

export default Column