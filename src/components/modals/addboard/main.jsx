// React
import React, { useEffect, useState } from 'react'

// Styles
import { Header, Title, Form, CreateTaskButton, AddNewColumnButton } from './addboardmodal.styles'

// UI Components
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

//
//
//
const AddBoardModal = ({ boardId }) => {
    // Variables
    const [boardName, setBoardName] = useState('')
    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000' }])

    // Handle Submit
    const createBoard = async (e) => {
        e.preventDefault()

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
        setColumns((prevColumns) => [
            ...prevColumns,
            { id: prevColumns.length, value: "", color: "#000" },
        ]);
    };

    const delColumn = (index) => {
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
                    />

                    <DeletableInput
                        label="Columns"
                        data={columns}
                        type="text"
                        placeholder="e.g. Todo"
                        onValueChange={handleColumnChange}
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