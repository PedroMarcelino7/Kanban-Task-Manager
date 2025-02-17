// React
import React, { useEffect, useState } from 'react'

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from './edittaskmodal.styles'

// Components

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import LabeledTextArea from '../../../ui/textareas/labeledtextarea/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

// Images | Icons

//---

//YUP Schema
const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    description: yup.string(),
}).required();

//
//
//
const EditTaskModal = ({ task }) => {
    // Form Validator
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    //
    //
    // Variables
    const [taskTitle, setTaskTitle] = useState(task.task_name)
    const [taskDescription, setTaskDescription] = useState(task.task_description)
    const [subtasks, setSubtasks] = useState([{ id: 0, value: '' }])

    // Handle Submit
    const onSubmit = async (e) => {
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

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Task [Edit Task Modal]:', task)
        console.log('>>> Subtasks [Edit Task Modal]:', task.subtasks)
    }, [])

    //
    //
    // Other Functions
    const handleSubtaskChange = (id, newValue) => {
        setSubtasks((prevSubtasks) =>
            prevSubtasks.map((subtask) =>
                subtask.id === id ? { ...subtask, value: newValue } : subtask
            )
        );
    };

    const addSubtask = () => {
        setSubtasks((prevSubtasks) => [
            ...prevSubtasks,
            { id: prevSubtasks.length, value: '' },
        ]);
    }

    const delSubtask = (id) => {
        setSubtasks(prevSubtasks => prevSubtasks.filter(subtask => subtask.id !== id))
    }

    //
    //
    //
    return (
        <>
            <Header>
                <Title>
                    Edit Task
                </Title>
            </Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <LabeledInput
                    label='Title'
                    type='text'
                    placeholder='e.g. Take Coffee Break'
                    name={{ ...register('name') }}
                    error={errors?.name?.message}
                />

                <LabeledTextArea
                    label='Description'
                    placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`}
                    name={{ ...register('description') }}
                    error={errors?.description?.message}
                />

                <DeletableInput
                    label='Subtasks'
                    data={subtasks}
                    type='text'
                    placeholder='e.g. Make Coffee'
                    onValueChange={handleSubtaskChange}
                    closeButton={delSubtask}
                />

                {/* <InputBox>
                    <InputLabel>Subtasks</InputLabel>
                    {task.subtasks.map((subtask, index) => (
                        <AddSubtaskInput key={index}>
                            <Input type='text' placeholder='e.g. Make coffee' value={subtask.subtask_name} />
                            <img src={RemoveSubtask} alt="" />
                        </AddSubtaskInput>
                    ))}
                </InputBox> */}

                <AddSubtaskButton type='button' onClick={addSubtask}>
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