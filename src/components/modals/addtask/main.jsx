// React
import React, { useEffect, useState } from 'react'
import { useModal } from '../main'

// Styles
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './addtaskmodal.styles'

// Components

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import LabeledTextArea from '../../../ui/textareas/labeledtextarea/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'
import DefaultButton from '../../../ui/buttons/defaultButton/main'

// Images | Icons
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import RemoveSubtask from '../../../assets/icon-cross.svg'

//
//
//
const AddTaskModal = ({ board }) => {
    // Variables
    const { closeModal } = useModal()
    const [columnId, setColumnId] = useState(board.columns[0].column_id)
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [subtasks, setSubtasks] = useState([{ id: 0, value: '' }])
    const [taskId, setTaskId] = useState(0)

    // Handle Submit
    const onSubmit = async (e) => {
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

        closeModal(false)
    }

    // Use Effect Logs
    useEffect(() => {
        getTaskId()

        console.log('>>> Board [Add New Task Modal]:', board)
    }, [])

    //
    //
    // Other Functions
    const getTaskId = async () => {
        try {
            const id = await fetch("http://localhost:3001/api/tasks/lastid").then(res => res.json())
            setTaskId(id[0].id + 1)
            console.log('>>> Task id [Add New Task Modal]:', id[0].id + 1)
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

            <Form onSubmit={(e) => onSubmit(e)}>
                <LabeledInput
                    label='Name'
                    type='text'
                    placeholder='e.g. Take Coffee Break'
                    value={taskName}
                    onValueChange={setTaskName}
                />

                <LabeledTextArea
                    label='Description'
                    placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`}
                    value={taskDescription}
                    onValueChange={setTaskDescription}
                />

                <DeletableInput
                    label='Subtasks'
                    data={subtasks}
                    type='text'
                    placeholder='e.g. Make Coffee'
                    onValueChange={handleSubtaskChange}
                    closeButton={delSubtask}
                />

                <DefaultButton
                    label='+ Add New Subtask'
                    onClick={addSubtask}
                    color='var(--main-purple)'
                    background='#e4ebfa'
                    fontWeight='bold'
                    negativeMargin={true}
                />

                <div>
                    <SectionTitle>
                        Status
                    </SectionTitle>

                    <StatusBox>
                        <img src={SelectIcon} alt="" />

                        <StatusSelect onChange={(e) => setColumnId(e.target.value)}>
                            {board.columns.map((column, index) => (
                                <StatusOption key={index} value={column.column_id}>
                                    {column.column_name}
                                </StatusOption>
                            ))}
                        </StatusSelect>
                    </StatusBox>
                </div>

                <DefaultButton
                    label='Create Task'
                    type='submit'
                />
            </Form>
        </>
    )
}

export default AddTaskModal