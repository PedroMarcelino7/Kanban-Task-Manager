import React, { useState } from 'react'
import { CardBox, Subtitle, Title } from './card.styles'
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

const Card = ({ task }) => {
    const [showTaskModal, setShowTaskModal] = useState(false)

    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>{task.task_name}</Title>
                <Subtitle>0 of 3 subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal>
                    <ViewTaskModal task={task} />
                </Modal>
            }
        </>
    )
}

export default Card