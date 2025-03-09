import React, { useEffect } from 'react'
import { CardsContainer, ColumnBox, IdentificationColor, Title, TitleBox } from './column.styles'
import Card from './Card/main'
import { useTasks } from '../../../contexts/TaskContext'

const Column = ({ column, data }) => {
    //
    const { tasks, refreshTasks } = useTasks()
    //

    useEffect(() => {
        console.log('>>> Column ID [Column component]:', column.column_id)
        console.log('>>> Column [Column component]:', column)
        console.log('>>> Data [Column component]:', data)
        //
        console.log('>>> Tasks:', tasks)
        //
    }, [])

    return (
        <ColumnBox>
            <TitleBox>
                <IdentificationColor color={column.column_color} />
                <Title>
                    {column.column_name} ({tasks.filter(task => task.column_id === column.column_id).length})
                </Title>
            </TitleBox>

            <CardsContainer>
                {tasks.map((task, index) => (
                    task.column_id === column.column_id &&
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