// React
import React from 'react'
import { useModal } from '../main'

// Styles
import { Header, Title, Subtitle, ButtonsBox } from './deletetaskmodal.styles'
import DefaultButton from '../../../ui/buttons/defaultButton/main'

//
//
//
const DeleteTaskModal = ({ taskId }) => {
    // Variables
    const { closeModal } = useModal()

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
        } catch (error) {
            console.error('Erro ao deletar a task:', error);
        }

        closeModal(false)
    }

    const handleCloseModal = () => {
        closeModal(false)
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
                        onClick={handleCloseModal}
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