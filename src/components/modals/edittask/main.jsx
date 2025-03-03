// React
import React, { useEffect, useState } from 'react'
import { useModal } from "../main";

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from './edittaskmodal.styles'

// Components

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import LabeledTextArea from '../../../ui/textareas/labeledtextarea/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'
import DefaultButton from "../../../ui/buttons/defaultButton/main";

// Images | Icons

//
//
//
const EditTaskModal = ({ task }) => {
    // Variables
    const { closeModal } = useModal()
    const [taskName, setTaskName] = useState(task.task_name)
    const [taskDescription, setTaskDescription] = useState(task.task_description)
    const [subtasks, setSubtasks] = useState(task.subtasks)
    const [inputErrors, setInputErrors] = useState([])

    // Handle Submit
    const onSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Formulário inválido. Corrija os erros antes de enviar.");
            return;
        }

        console.log('>>> Handle Submit Data [Edit Task Modal]:', task.task_id, taskName, taskDescription)

        try {
            const response = await fetch('http://localhost:3001/api/tasks/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    task_id: task.task_id,
                    task_name: taskName,
                    task_description: taskDescription
                })
            })

            const data = await response.json()
            console.log('>>> Resposta Task [Edit Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a task:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/api/subtasks/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subtasks
                })
            })

            const data = await response.json()
            console.log('>>> Resposta Task [Edit Subask Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a subtask:', error);
        }

        closeModal(false)
    }

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Task [Edit Task Modal]:', task)
        console.log('>>> Subtasks [Edit Task Modal]:', task.subtasks)
    }, [])

    //
    //
    // Other Functions
    const validateForm = () => {
        let errors = [];

        if (!taskName || taskName === '') {
            errors.push('task');
        }

        const hasEmptySubtask = subtasks.some(subtask => subtask.value === '');
        if (hasEmptySubtask) {
            errors.push('subtasks');
        }

        setInputErrors(errors);

        return errors.length === 0;
    };

    const handleSubtaskChange = (id, newValue) => {
        setSubtasks((prevSubtasks) =>
            prevSubtasks.map((subtask) =>
                subtask.subtask_id === id ? { ...subtask, subtask_name: newValue } : subtask
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

            <Form onSubmit={(e) => onSubmit(e)}>
                <LabeledInput
                    label='Title'
                    type='text'
                    placeholder='e.g. Take Coffee Break'
                    value={taskName}
                    onValueChange={setTaskName}
                    error={inputErrors.some(input => input === 'task')}
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
                    dataValue={'subtask_name'}
                    idReference={'subtask_id'}
                    type='text'
                    placeholder='e.g. Make Coffee'
                    onValueChange={handleSubtaskChange}
                    closeButton={delSubtask}
                    error={inputErrors.some(input => input === 'subtask')}
                />

                <DefaultButton
                    label='+ Add New Subtask'
                    onClick={addSubtask}
                    color='var(--main-purple)'
                    background='#e4ebfa'
                    fontWeight='bold'
                />

                <DefaultButton
                    label='Save Changes'
                    type='submit'
                    negativeMargin={true}
                />
            </Form>
        </>
    )
}

export default EditTaskModal