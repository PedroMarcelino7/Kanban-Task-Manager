import React, { useEffect, useState } from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'

const Column = ({ column }) => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])

    const getTasks = async (column_id) => {
        try {
            const response = await fetch(`http://localhost:3001/columns/${column_id}/tasks`)
            const data = await response.json();

            console.log('Tasks:', data)
            setTasks(data)
            setLoading(false)
        } catch (error) {
            console.error('Erro ao buscar tasks:', error);
        }
    }

    useEffect(() => {
        console.log('>>> Column ID:', column.column_id)
        console.log('>>> Data [Columns]:', column)
        getTasks(column.column_id)
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
                {tasks.map((task, index) => (
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