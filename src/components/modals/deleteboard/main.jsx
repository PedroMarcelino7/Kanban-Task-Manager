import React from 'react'
import { Header, Title, AddSubtaskButton, CreateTaskButton, Subtitle, ButtonsBox } from './deleteboardmodal.styles'

const DeleteBoardModal = () => {
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Delete this board?
                    </Title>
                </Header>
            </div>

            <div>
                <Subtitle>
                    Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.
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

export default DeleteBoardModal