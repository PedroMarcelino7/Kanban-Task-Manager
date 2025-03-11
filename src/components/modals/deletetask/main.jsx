// React
import React from 'react'
import { useTasks } from '../../../contexts/TaskContext'
import { useToast } from '../../../contexts/ToastContext'

// Styles
import { Header, Title, Subtitle, ButtonsBox } from './deletetaskmodal.styles'

// Components

// UI Components
import DefaultButton from '../../../ui/buttons/defaultButton/main'

// Images | Icons

//
//
//
const DeleteTaskModal = ({ taskId, closeModal }) => {
    // Variables
    const { refreshTasks } = useTasks()

    const { showToast } = useToast()

    // Handle Submit
    const deleteTask = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/tasks/delete', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_id: taskId
                })
            })

            const data = await response.json()
            console.log(">>> Resposta Task [Delete Task Modal]:", data)

            refreshTasks()
        } catch (error) {
            console.error('Erro ao deletar a task:', error);
        }

        showToast({ type: "timed", message: "Task successfully deleted!", status: "success" })
        closeModal()
    }

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Delete this task?
                    </Title>
                </Header>
            </div>

            <div>
                <Subtitle>
                    Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.
                </Subtitle>
            </div>

            <div>
                <ButtonsBox>
                    <DefaultButton
                        label='Delete'
                        onClick={deleteTask}
                        background='var(--red)'
                        fontWeight='bold'
                    />

                    <DefaultButton
                        label='Cancel'
                        onClick={() => closeModal()}
                        color='var(--main-purple)'
                        background='#e4ebfa'
                        fontWeight='bold'
                    />
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteTaskModal