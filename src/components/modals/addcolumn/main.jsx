// React
import React, { useState } from 'react'
import { useModal } from '../main';
import { useColumns } from '../../../contexts/ColumnContext'

// Styles
import { Header, Title, Form } from './addcolumnmodal.styles'

// Components

// UI Components
import DeletableInput from '../../../ui/inputs/deletableinput/main'
import DefaultButton from '../../../ui/buttons/defaultButton/main';
import { useToast } from '../../../contexts/ToastContext';

//
//
//
const AddColumnModal = ({ boardId }) => {
    // Variables
    const { closeModal } = useModal()

    const { showToast } = useToast()

    const { refreshColumns } = useColumns()

    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000' }])

    const [inputErrors, setInputErrors] = useState([])

    // Handle Submit
    const createColumn = async (e) => {
        e.preventDefault();

        console.log('>>> Submit new Column [Add Column Modal]:', '\n > Columns:', columns);

        if (!validateForm()) {
            console.log("Formulário inválido. Corrija os erros antes de enviar.");
            return;
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
            console.log('>>> Resposta Columns [Add Column Modal]:', data);

            refreshColumns()
        } catch (error) {
            console.error('Erro ao criar as colunas:', error);
        }

        showToast({ type: "timed", message: "Column successfully registered!", status: "success" })
        closeModal()
    }

    // Use Effect Logs

    //
    //
    // Other Functions
    const validateForm = () => {
        let errors = [];

        const hasEmptyColumn = columns.some(column => column.value.trim() === '');
        if (hasEmptyColumn) {
            errors.push('columns');
        }

        setInputErrors(errors);

        return errors.length === 0;
    };

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
                column.column_id === id ? { ...column, color: newColor } : column
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
                        dataValue='value'
                        idReference='id'
                        type='text'
                        placeholder='e.g. Todo'
                        onValueChange={handleColumnChange}
                        hasColorInput={true}
                        onColorChange={handleColorChange}
                        closeButton={delColumn}
                        error={inputErrors.some(input => input === 'columns')}
                    />

                    <DefaultButton
                        label='+ Add New Column'
                        onClick={addNewColumn}
                        color='var(--main-purple)'
                        background='#e4ebfa'
                        fontWeight='bold'
                    />

                    <DefaultButton
                        label='Create New Board'
                        type='submit'
                        negativemargin={true}
                    />
                </Form>
            </div>
        </>
    )
}

export default AddColumnModal