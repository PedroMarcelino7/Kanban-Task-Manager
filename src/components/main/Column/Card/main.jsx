import React, { useEffect, useState } from 'react'
import { CardBox, Subtitle, Title } from './card.styles'
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

const Card = ({ task, column }) => {
    const [showTaskModal, setShowTaskModal] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('>> Task ID [Card component | Task]:', task.task_id)
        console.log('>> Task [Card component | Task]:', task)
        console.log('>> Column [Card component | Task]:', column)
    }, [])

    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>{task.task_name}</Title>
                <Subtitle>0 of 3 subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal>
                    <ViewTaskModal task={task} column={column} />
                </Modal>
            }
        </>
    )
}

export default Card