import React, { useEffect, useState } from 'react'
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './edittaskmodal.styles'
import RemoveSubtask from '../../../assets/icon-cross.svg'

const EditTaskModal = ({ task }) => {
    const [taskTitle, setTaskTitle] = useState(task.task_name)
    const [taskDescription, setTaskDescription] = useState(task.task_description)

    useEffect(() => {
        console.log('>>> Task [Edit Task Modal]:', task)
    }, [])

    return (
        <>
            <Header>
                <Title>
                    Edit Task
                </Title>
            </Header>

            <Form>
                <InputBox>
                    <InputLabel>Title</InputLabel>
                    <Input type='text' placeholder='e.g. Take coffee break' value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                </InputBox>

                <InputBox>
                    <InputLabel>Description</InputLabel>
                    <TextArea placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`} max={3}
                        value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                    />
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

                <CreateTaskButton>
                    Save Changes
                </CreateTaskButton>
            </Form>
        </>
    )
}

export default EditTaskModal