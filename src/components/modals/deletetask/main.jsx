import React from 'react'
import { Header, Title, AddSubtaskButton, CreateTaskButton, Subtitle, ButtonsBox } from './deletetaskmodal.styles'

const DeleteTaskModal = () => {
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
                    <AddSubtaskButton>
                        Delete
                    </AddSubtaskButton>

                    <CreateTaskButton>
                        Cancel
                    </CreateTaskButton>
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteTaskModal