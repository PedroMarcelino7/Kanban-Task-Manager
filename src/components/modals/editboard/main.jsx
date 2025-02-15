// React
import React, { useEffect, useState } from 'react'

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from './editboardmodal.styles'

// Components

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

// Images | Icons

//---

//YUP Schema
const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
}).required();

//
//
//
const EditBoardModal = ({ data, board_id }) => {
    // Form Validator
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    //
    //
    // Variables
    const board = data[board_id - 1]
    const [boardName, setBoardName] = useState(board.board_name)
    const [columns, setColumns] = useState(board.columns.map((col) => ({ id: col.column_id, value: col.column_name })))

    // Handle Submit
    const onSubmit = async (formData) => {
        try {
            const response = await fetch('http://localhost:3001/api/boards/update', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_id: board.board_id,
                    board_name: formData.name
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Board [Edit Board Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar o board:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/api/columns/update', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    columns: columns
                })
            })

            const data = await response.json()
            console.log('>>> Resposta Columns [Edit Board Modal]:', data)
        } catch (error) {
            console.error('Erro ao editar as colunas:', error);
        }
    }

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Data [Edit Board Modal]:', board)
        console.log('>>> Board Name [Edit Board Modal]:', boardName)
        console.log('>>> Columns [Edit Board Modal]:', columns)
    }, [])

    //
    //
    // Other Functions
    const editColumns = (id, value) => {
        setColumns((prevColumns) =>
            prevColumns.map((col) => (col.id === id ? { ...col, value } : col))
        )
    }

    //
    //
    //
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <LabeledInput
                        label='Name'
                        type='text'
                        placeholder='e.g. Web Design'
                        name={{ ...register('name') }}
                        error={errors?.name?.message}
                    />

                    <DeletableInput
                        label='Columns'
                        data={columns}
                        type='text'
                        placeholder='e.g. Todo'
                        onValueChange={editColumns}
                    // closeButton={}
                    />

                    <AddSubtaskButton type='button'>
                        + Add New Column
                    </AddSubtaskButton>

                    <CreateTaskButton type='submit'>
                        Save Changes
                    </CreateTaskButton>
                </Form>
            </div>
        </>
    )
}

export default EditBoardModal