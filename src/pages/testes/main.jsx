import React, { useEffect } from 'react'
import { useBoards } from '../../contexts/BoardContext'
import { useColumns } from '../../contexts/ColumnContext'
import { useTasks } from '../../contexts/TaskContext'
import { useSubtasks } from '../../contexts/SubtaskContext'
import DefaultButton from '../../ui/buttons/defaultButton/main'

const Testes = () => {
    const { boards, refreshBoards } = useBoards()
    const { columns, refreshColumns } = useColumns()
    const { tasks, refreshTasks } = useTasks()
    const { subtasks, refreshSubtasks } = useSubtasks()

    const data = boards.map(board => ({
        ...board,
        columns: columns
            .filter(column => column.board_id === board.board_id)
            .map(column => ({
                ...column,
                tasks: tasks
                    .filter(task => task.column_id === column.column_id)
                    .map(task => ({
                        ...task,
                        subtasks: subtasks.filter(
                            subtask => subtask.task_id === task.task_id
                        )
                    }))
            }))
    }));

    useEffect(() => {
        console.log('INITIAL:\n\n\nBoards:', boards, '\n\nColumns:', columns, '\n\nTasks:', tasks, '\n\nSubtasks:', subtasks)
    }, [])

    useEffect(() => {
        console.log('REFRESHED:\nBoards:', boards)
    }, [boards])
    useEffect(() => {
        console.log('REFRESHED:\nColumns:', columns)
    }, [columns])
    useEffect(() => {
        console.log('REFRESHED:\nTasks:', tasks)
    }, [tasks])
    useEffect(() => {
        console.log('REFRESHED:\nSubtasks:', subtasks)
    }, [subtasks])

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: '500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem'
            }}>
                <button onClick={() => console.log('>>> Data:', data)}>teste</button>
                <DefaultButton label={'Refresh Boards'} onClick={refreshBoards} />
                <DefaultButton label={'Refresh Columns'} onClick={refreshColumns} />
                <DefaultButton label={'Refresh Tasks'} onClick={refreshTasks} />
                <DefaultButton label={'Refresh Subtasks'} onClick={refreshSubtasks} />
            </div>
        </div>
    )
}

export default Testes