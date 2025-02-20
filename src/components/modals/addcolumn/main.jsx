// React
import React, { useState } from 'react'

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

// Styles
import { Header, Title, Form, CreateTaskButton, AddNewColumnButton } from './addcolumnmodal.styles'

// Components
import DeletableInput from '../../../ui/inputs/deletableinput/main'

// UI Components

//
//
//
const AddColumnModal = ({ board_id }) => {
    // Variables
    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000' }])

    // Handle Submit
    const createColumn = async (e) => {
        e.preventDefault();
        
        console.log('>>> Submit new Column [Add Column Modal]:', '\n > Columns:', columns);

        try {
            const response = await fetch('http://localhost:3001/api/columns/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    columns: columns,
                    board_id: board_id
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Columns [Add Column Modal]:', data);
        } catch (error) {
            console.error('Erro ao criar as colunas:', error);
        }
    }

    // Use Effect Logs

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
        setColumns((prevColumns) => [
            ...prevColumns,
            { id: prevColumns.length, value: '', color: '#000' },
        ]);
    };

    const delColumn = (id) => {
        setColumns(prevColumns => prevColumns.filter(column => column.id !== id))
    }

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Add New Column
                    </Title>
                </Header>
            </div>

            <div>
                <Form onSubmit={createColumn}>
                    <DeletableInput
                        label='Columns'
                        data={columns}
                        type='text'
                        placeholder='e.g. Todo'
                        onValueChange={handleColumnChange}
                        hasColorInput={true}
                        onColorChange={handleColorChange}
                        closeButton={delColumn}
                    />

                    <AddNewColumnButton type='button' onClick={addNewColumn}>
                        + Add New Column
                    </AddNewColumnButton>

                    <CreateTaskButton>
                        Create New Column
                    </CreateTaskButton>
                </Form>
            </div>
        </>
    )
}

export default AddColumnModal