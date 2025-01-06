import React from 'react'
import { Header, Title, InputBox, InputLabel, Input, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './editboardmodal.styles'
import RemoveSubtask from '../../../assets/icon-cross.svg'

const EditBoardModal = () => {
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Edit Board
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
                        <AddSubtaskInput>
                            <Input type='text' placeholder='e.g. Todo' />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                        <AddSubtaskInput>
                            <Input type='text' placeholder='e.g. Doing' />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                    </InputBox>

                    <AddSubtaskButton>
                        + Add New Column
                    </AddSubtaskButton>

                    <CreateTaskButton>
                        Save Changes
                    </CreateTaskButton>
                </Form>
            </div>
        </>
    )
}

export default EditBoardModal