// React
import React, { useEffect, useState } from 'react'
import { useModal } from '../main'
import { useBoards } from '../../../contexts/BoardContext'
import { useColumns } from '../../../contexts/ColumnContext'
import { useToast } from '../../../contexts/ToastContext'

// Styles
import { Header, Title, Form } from './addboardmodal.styles'

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'
import DefaultButton from '../../../ui/buttons/defaultButton/main'
import IconedToast from '../../../ui/toasts/iconedtoast/main'

//
//
//
const AddBoardModal = () => {
    // Variables
    const { closeModal } = useModal();

    const { showToast } = useToast()

    const { refreshBoards } = useBoards()
    const { refreshColumns } = useColumns()

    const [boardName, setBoardName] = useState('')
    const [boardId, setBoardId] = useState(0)
    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000' }])

    const [inputErrors, setInputErrors] = useState([])

    // Handle Submit
    const createBoard = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.log("Formulário inválido. Corrija os erros antes de enviar.");
            return;
        }

        console.log('>>> Submit new board [Add Board Modal]:', '\n > Columns:', columns);

        try {
            const response = await fetch('http://localhost:3001/api/boards/post', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_name: boardName
                })
            });

            const data = await response.json();
            console.log('>>> Resposta Board [Add Board Modal]:', data);

            refreshBoards()
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
            });

            const data = await response.json();
            console.log('>>> Resposta Columns [Add Board Modal]:', data);

            refreshColumns()
        } catch (error) {
            console.error('Erro ao criar as colunas:', error);
        }

        showToast({ type: "timed", message: "Board successfully registered!", status: "success" })
        closeModal();
    };

    // Use Effect Logs
    useEffect(() => {
        getLastBoardId()

        console.log('>>> Board ID [Add Board Modal]:', boardId)
        console.log('>>> Columns [Add Board Modal]:', columns)
    }, [])

    //
    //
    // Other Functions
    const validateForm = () => {
        let errors = [];

        if (!boardName || boardName.trim() === '') {
            errors.push('board');
        }

        const hasEmptyColumn = columns.some(column => column.value.trim() === '');
        if (hasEmptyColumn) {
            errors.push('columns');
        }

        setInputErrors(errors);

        return errors.length === 0;
    };

    const getLastBoardId = async () => {
        try {
            const id = await fetch('http://localhost:3001/api/boards/lastid').then(res => res.json())
            setBoardId(id[0].id + 1)
            console.log('>>> Last Board ID [Add Board Modal]:', id[0].id + 1)
        } catch (error) {
            console.error('Erro ao receber o id do último board:', error);
        }
    }

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
            { id: prevColumns.length, value: "", color: "#000" },
        ]);
    };

    const delColumn = (id) => {
        setColumns((prevColumns) => prevColumns.filter((column) => column.id !== id));
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
                <Form onSubmit={(e) => createBoard(e)}>
                    <LabeledInput
                        label='Name'
                        type='text'
                        placeholder='e.g. Web Design'
                        value={boardName}
                        onValueChange={setBoardName}
                        error={inputErrors.some(error => error === 'board')}
                    />

                    <DeletableInput
                        label="Columns"
                        data={columns}
                        dataValue='value'
                        idReference='id'
                        type="text"
                        placeholder="e.g. Todo"
                        onValueChange={handleColumnChange}
                        hasColorInput={true}
                        onColorChange={handleColorChange}
                        closeButton={delColumn}
                        error={inputErrors.some(error => error === 'columns')}
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

export default AddBoardModal