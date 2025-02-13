import React, { useEffect, useState } from 'react'
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './edittaskmodal.styles'
import RemoveSubtask from '../../../assets/icon-cross.svg'

const EditTaskModal = ({ task }) => {
    const [taskTitle, setTaskTitle] = useState(task.task_name)
    const [taskDescription, setTaskDescription] = useState(task.task_description)

    useEffect(() => {
        console.log('>>> Task [Edit Task Modal]:', task)
        console.log('>>> Subtasks [Edit Task Modal]:', task.subtasks)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('>>> Handle Submit Data [Edit Task Modal]:', task.task_id, taskTitle, taskDescription)

        try {
            const response = await fetch('http://localhost:3001/api/tasks/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_id: task.task_id,
                    task_name: taskTitle,
                    task_description: taskDescription
                })
            })

            const data = await response.json()
            console.log('>>> Resposta Task [Edit Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a task:', error);
        }
    }

    return (
        <>
            <Header>
                <Title>
                    Edit Task
                </Title>
            </Header>

            <Form onSubmit={handleSubmit}>
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
                    {task.subtasks.map((subtask, index) => (
                        <AddSubtaskInput key={index}>
                            <Input type='text' placeholder='e.g. Make coffee' value={subtask.subtask_name} />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                    ))}
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