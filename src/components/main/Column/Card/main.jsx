// React
import React, { useEffect, useState } from 'react'
import { useSubtasks } from '../../../../contexts/SubtaskContext'

// Styles
import { CardBox, Subtitle, Title } from './card.styles'

// Components
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

// UI Components

// Images | Icons

//
//
//
const Card = ({ task, column }) => {
    //
    //
    // Variables
    const { subtasks, refreshSubtasks } = useSubtasks()

    const subtasksInTask = subtasks.filter(subtask => subtask.task_id === task.task_id)

    const [showTaskModal, setShowTaskModal] = useState(false)

    // Use Effect Logs
    useEffect(() => {
        console.log('>> Task ID [Card component | Task]:', task.task_id)
        console.log('>> Task [Card component | Task]:', task)
        console.log('>> Column [Card component | Task]:', column)
    }, [])

    //
    //
    // Other Functions
    const getCheckedSubtasks = () => {
        return subtasksInTask.reduce((count, subtask) => {
            return subtask.subtask_ischecked === 1 ? count + 1 : count
        }, 0)
    }

    //
    //
    //
    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>{task.task_name}</Title>
                <Subtitle>{getCheckedSubtasks()} of {subtasksInTask.length} subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal closeModal={setShowTaskModal}>
                    <ViewTaskModal task={task} column={column} />
                </Modal>}
        </>
    )
}

export default Card