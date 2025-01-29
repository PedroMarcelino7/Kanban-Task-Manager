import React, { useEffect, useState } from 'react'
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './addtaskmodal.styles'
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import RemoveSubtask from '../../../assets/icon-cross.svg'

const AddTaskModal = ({ data, board_id }) => {
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [columnId, setColumnId] = useState(data[board_id - 1].columns[0].column_id)
    const [subtasks, setSubtasks] = useState([{ id: 0, value: '' }])
    const [taskId, setTaskId] = useState(0)

    const addSubtask = () => {
        setSubtasks((prevSubtasks) => [
            ...prevSubtasks,
            { id: prevSubtasks.length, value: '' },
        ]);
    }

    const delSubtask = (id) => {
        setSubtasks(prevSubtasks => prevSubtasks.filter(subtask => subtask.id !== id))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('Handle Submit [Add Task Modal]: \nName:', taskName, '\nDescription:', taskDescription, '\nStatus:', columnId)

        console.log('COLUMN ID ENVIADO NO SUBMIT [1]:', columnId)
        try {
            const response = await fetch('http://localhost:3001/api/tasks/post', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_name: taskName,
                    task_description: taskDescription,
                    column_id: columnId
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Task [Add Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar a task:', error);
        }

        
    }

    const getTaskId = async () => {
        try {
            const id = await fetch("http://localhost:3001/api/tasks/lastid").then(res => res.json())
            setTaskId(id[0].id + 1)
            console.log('>> Task id [Add Task Modal]:', id[0].id + 1)
        } catch (error) {
            console.error('Erro ao receber o id da task:', error);
        }
    }

    useEffect(() => {
        getTaskId()
    }, [])

    return (
        <>
            <div>
                <Header>
                    <Title>
                        Add New Task
                    </Title>
                </Header>
            </div>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <InputBox>
                    <InputLabel>Name</InputLabel>
                    <Input type='text' placeholder='e.g. Take coffee break'
                        value={taskName} onChange={(e) => setTaskName(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <InputLabel>Description</InputLabel>
                    <TextArea
                        placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`} max={3}
                        value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
                    />
                </InputBox>

                <InputBox>
                    <InputLabel>Subtasks</InputLabel>
                    {subtasks.map((subtask, index) => (
                        <AddSubtaskInput key={index}>
                            <Input type="text" placeholder="e.g. Make coffee"
                                value={subtask.value}
                                onChange={(e) =>
                                    setSubtasks((prevSubtasks) =>
                                        prevSubtasks.map((task) =>
                                            task.id === subtask.id ? { ...task, value: e.target.value } : task
                                        )
                                    )
                                }
                            />
                            <img src={RemoveSubtask} alt="" onClick={() => delSubtask(subtask.id)} />
                        </AddSubtaskInput>
                    ))}
                </InputBox>

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