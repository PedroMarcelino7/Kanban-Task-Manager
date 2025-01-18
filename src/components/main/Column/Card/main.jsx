import React, { useEffect, useState } from 'react'
import { CardBox, Subtitle, Title } from './card.styles'
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

const Card = ({ task, column }) => {
    const [showTaskModal, setShowTaskModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [subtasks, setSubtasks] = useState([])

    const getSubtasks = async (task_id) => {
        try {
            const response = await fetch(`http://localhost:3001/tasks/${task_id}/subtasks`)
            const data = await response.json()

            console.log('Subtasks:', data)
            setSubtasks(data)
            setLoading(false)
        } catch (error) {
            console.error('Erro ao buscar subtasks:', error);
        }
    }

    useEffect(() => {
        console.log('>> Task ID:', task.task_id)
        getSubtasks(task.task_id)
    }, [])

    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>{task.task_name}</Title>
                <Subtitle>0 of 3 subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal>
                    <ViewTaskModal task={task} subtasks={subtasks} column={column} />
                </Modal>
            }
        </>
    )
}

export default Card