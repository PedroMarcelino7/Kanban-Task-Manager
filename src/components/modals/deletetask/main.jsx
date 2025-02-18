// React
import React from 'react'

// Styles
import { Header, Title, AddSubtaskButton, CreateTaskButton, Subtitle, ButtonsBox } from './deletetaskmodal.styles'

//
//
//
const DeleteTaskModal = ({ task_id, closeModal }) => {
    // Handle Submit
    const deleteTask = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/tasks/delete', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_id: task_id
                })
            })

            const data = await response.json()
            console.log(">>> Resposta Task [Delete Task Modal]:", data)
        } catch (error) {
            console.error('Erro ao deletar a task:', error);
        }
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
                    <AddSubtaskButton onClick={deleteTask}>
                        Delete
                    </AddSubtaskButton>

                    <CreateTaskButton onClick={() => closeModal(false)}>
                        Cancel
                    </CreateTaskButton>
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteTaskModal