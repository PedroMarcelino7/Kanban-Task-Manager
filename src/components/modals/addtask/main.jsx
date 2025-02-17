// React
import React, { useEffect, useState } from 'react'

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

// Styles
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './addtaskmodal.styles'

// Components

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import LabeledTextArea from '../../../ui/textareas/labeledtextarea/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

// Images | Icons
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import RemoveSubtask from '../../../assets/icon-cross.svg'

//---

//YUP Schema
const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    description: yup.string(),
}).required()

//
//
//
const AddTaskModal = ({ data, board_id }) => {
    // Form Validator
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    //
    //
    // Variables
    const [columnId, setColumnId] = useState(data[board_id - 1].columns[0].column_id)
    const [subtasks, setSubtasks] = useState([{ id: 0, value: '' }])
    const [taskId, setTaskId] = useState(0)

    // Handle Submit
    const onSubmit = async (formData) => {
        console.log('Handle Submit [Add Task Modal]: \nName:', formData.name, '\nDescription:', formData.description, '\nStatus:', columnId)

        console.log('COLUMN ID ENVIADO NO SUBMIT [1]:', columnId)
        try {
            const response = await fetch('http://localhost:3001/api/tasks/post', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_name: formData.name,
                    task_description: formData.description,
                    column_id: columnId
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Task [Add Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar a task:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/api/subtasks/post', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subtasks: subtasks,
                    task_id: taskId
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Subtask [Add Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar as subtasks:', error);
        }
    }

    // Use Effect Logs
    useEffect(() => {
        getTaskId()
    }, [])

    //
    //
    // Other Functions
    const getTaskId = async () => {
        try {
            const id = await fetch("http://localhost:3001/api/tasks/lastid").then(res => res.json())
            setTaskId(id[0].id + 1)
            console.log('>> Task id [Add Task Modal]:', id[0].id + 1)
        } catch (error) {
            console.error('Erro ao receber o id da task:', error);
        }
    }

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
            <div>
                <Header>
                    <Title>
                        Add New Task
                    </Title>
                </Header>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <LabeledInput
                    label='Name'
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

                <AddSubtaskButton type='button' onClick={addSubtask}>
                    + Add New Subtask
                </AddSubtaskButton>

                <div>
                    <SectionTitle>
                        Status
                    </SectionTitle>

                    <StatusBox>
                        <img src={SelectIcon} alt="" />

                        <StatusSelect onChange={(e) => setColumnId(e.target.value)}>
                            {data[board_id - 1].columns.map((column, index) => (
                                <StatusOption key={index} value={column.column_id}>
                                    {column.column_name}
                                </StatusOption>
                            ))}
                        </StatusSelect>
                    </StatusBox>
                </div>

                <div>
                    <CreateTaskButton type='submit'>
                        Create Task
                    </CreateTaskButton>
                </div>
            </Form>
        </>
    )
}

export default AddTaskModal