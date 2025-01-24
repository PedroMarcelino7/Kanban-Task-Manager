import React from 'react'
import { Header, Title, InputBox, InputLabel, Input, Form, CreateTaskButton, AddNewColumnButton } from './addboardmodal.styles'
import AddSubtaskInputComponent from './addsubtaskinput/main'

const AddBoardModal = () => {
    const addNewColumn = () => {
        return (
            <InputBox>
                <InputLabel>Columns</InputLabel>
                <AddSubtaskInputComponent />
            </InputBox>
        )
    }

    return (
        <>
            <div>
                <Header>
                    <Title>
                        Add New Board
                    </Title>
                </Header>
            </div>

            <div>
                <Form>
                    <InputBox>
                        <InputLabel>Name</InputLabel>
                        <Input type='text' placeholder='e.g. Web Design' />
                    </InputBox>

                    <InputBox>
                        <InputLabel>Columns</InputLabel>
                        <AddSubtaskInputComponent />
                    </InputBox>

                    <AddNewColumnButton type='button' onClick={addNewColumn}>
                        + Add New Column
                    </AddNewColumnButton>

                    <CreateTaskButton>
                        Create New Board
                    </CreateTaskButton>
                </Form>
            </div>
        </>
    )
}

export default AddBoardModal