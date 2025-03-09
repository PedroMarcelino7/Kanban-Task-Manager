// React
import React, { useEffect } from 'react'
import { useTasks } from '../../../contexts/TaskContext'

// Styles
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'

// Components
import Card from './Card/main'

// UI Components

// Images | Icons

//
//
//
const Column = ({ column }) => {
    //
    //
    // Variables
    const { tasks, refreshTasks } = useTasks()
    const tasksInColumn = tasks.filter(task => task.column_id === column.column_id)

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Tasks [Column component]:', tasks)
        console.log('>>> Tasks In Column [Column component]:', tasksInColumn)
        console.log('>>> Column ID [Column component]:', column.column_id)
        console.log('>>> Column [Column component]:', column)
    }, [])

    //
    //
    //
    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor color={column.column_color} />
                <Title>
                    {column.column_name} ({tasksInColumn.length})
                </Title>
            </TitleBox>

            <CardsContainer>
                {tasksInColumn.map((task, index) => (
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