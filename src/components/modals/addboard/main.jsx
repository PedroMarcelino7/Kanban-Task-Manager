// React
import React, { useEffect, useState } from 'react'

// Form Validation
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

// Styles
import { Header, Title, Form, CreateTaskButton, AddNewColumnButton } from './addboardmodal.styles'

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

//---

//YUP Schema
const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    columns: yup.array().of(
        yup.object().shape({
            value: yup.string().required('Campo obrigatório!'),
        })
    )
}).required();

//
//
//
const AddBoardModal = ({ boardId }) => {
    // Form Validator
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            columns: [{ value: '', color: '#000' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "columns"
    });

    //
    //
    // Variables
    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000', name: 'name-0' }])

    // Handle Submit
    const createBoard = async (formData) => {
        console.log('>>> Hook Form Data [Add Board Modal]:', formData)
        console.log('>>> Submit new board [Add Board Modal]:', '\n > Columns:', columns);

        try {
            const response = await fetch('http://localhost:3001/api/boards/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_name: formData.name
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Board [Add Board Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar o board:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/api/columns/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    columns: columns,
                    board_id: boardId
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Columns [Add Board Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar as colunas:', error);
        }
    }

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Board ID [Add Board Modal]:', boardId)
    }, [])

    //
    //
    // Other Functions
    const handleColumnChange = (id, newValue) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === id ? { ...column, value: newValue } : column
            )
        );
    };

    const handleColorChange = (id, newColor) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === id ? { ...column, color: newColor } : column
            )
        );
    };

    const addNewColumn = () => {
        append({ value: '', color: '#000' });
    };

    const delColumn = (index) => {
        remove(index);
    };

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Add New Board
                    </Title>
                </Header>
            </div>

            <div>
                <Form onSubmit={handleSubmit(createBoard)}>
                    <LabeledInput
                        label='Name'
                        type='text'
                        placeholder='e.g. Web Design'
                        name={{ ...register("name") }}
                        error={errors?.name?.message}
                    />

                    <DeletableInput
                        label='Columns'
                        data={fields}
                        type='text'
                        placeholder='e.g. Todo'
                        register={register}
                        errors={errors}
                        hasColorInput={true}
                        onColorChange={handleColorChange}
                        closeButton={delColumn}
                    />

                    <AddNewColumnButton type='button' onClick={addNewColumn}>
                        + Add New Column
                    </AddNewColumnButton>

                    <CreateTaskButton>
                        Create New Board
                    </CreateTaskButton>
                </Form>
            </div>
        </>
    )
}

export default AddBoardModal