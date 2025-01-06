import React from 'react'
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './edittaskmodal.styles'
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import RemoveSubtask from '../../../assets/icon-cross.svg'

const EditTaskModal = () => {
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Edit Task
                    </Title>
                </Header>
            </div>

            <div>
                <Form>
                    <InputBox>
                        <InputLabel>Title</InputLabel>
                        <Input type='text' placeholder='e.g. Take coffee break' />
                    </InputBox>

                    <InputBox>
                        <InputLabel>Description</InputLabel>
                        <TextArea placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`} max={3} />
                    </InputBox>

                    <InputBox>
                        <InputLabel>Subtasks</InputLabel>
                        <AddSubtaskInput>
                            <Input type='text' placeholder='e.g. Make coffee' />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                        <AddSubtaskInput>
                            <Input type='text' placeholder='e.g. Drink coffee & smile' />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                    </InputBox>

                    <AddSubtaskButton>
                        + Add New Subtask
                    </AddSubtaskButton>
                </Form>
            </div>

            <div>
                <SectionTitle>
                    Status
                </SectionTitle>

                <StatusBox>
                    <img src={SelectIcon} alt="" />

                    <StatusSelect>
                        <StatusOption>Todo</StatusOption>
                        <StatusOption>Doing</StatusOption>
                        <StatusOption>Done</StatusOption>
                    </StatusSelect>
                </StatusBox>
            </div>

            <div>
                <CreateTaskButton>
                    Save Changes
                </CreateTaskButton>
            </div>
        </>
    )
}

export default EditTaskModal