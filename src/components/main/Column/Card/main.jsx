import React, { useEffect, useState } from 'react'
import { CardBox, Subtitle, Title } from './card.styles'
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

const Card = ({ task, column, data }) => {
    const [showTaskModal, setShowTaskModal] = useState(false)

    const getCheckedSubtasks = () => {
        return task.subtasks.reduce((count, subtask) => {
            return subtask.subtask_ischecked === 1 ? count + 1 : count
        }, 0)
    }

    useEffect(() => {
        console.log('>> Task ID [Card component | Task]:', task.task_id)
        console.log('>> Task [Card component | Task]:', task)
        console.log('>> Column [Card component | Task]:', column)
        console.log('>> Data [Card component | Task]:', data)
    }, [])

    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>{task.task_name}</Title>
                <Subtitle>{getCheckedSubtasks()} of {task.subtasks.length} subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal closeModal={setShowTaskModal}>
                    <ViewTaskModal task={task} column={column} data={data} />
                </Modal>}
        </>
    )
}

export default Card