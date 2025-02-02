import React, { useEffect, useState } from 'react'
import { Header, Title, InputBox, InputLabel, Input, Form, CreateTaskButton, AddNewColumnButton } from './addboardmodal.styles'
import AddSubtaskInputComponent from './addsubtaskinput/main'

const AddBoardModal = ({ boardId }) => {
    const [boardName, setBoardName] = useState('')
    const [columns, setColumns] = useState([{ id: 0, value: '', color: '#000' }])

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

    useEffect(() => {
        console.log('>>> Board ID [Add Board Modal]:', boardId)
    }, [])

    const createBoard = async (e) => {
        e.preventDefault();
        console.log('>>> Submit new board [Add Board Modal]:', '\n > Board name: ', boardName, '\n > Columns:', columns);

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
                <Form onSubmit={createBoard}>
                    <InputBox>
                        <InputLabel>Name</InputLabel>
                        <Input type='text' placeholder='e.g. Web Design'
                            value={boardName} onChange={(e) => setBoardName(e.target.value)}
                        />
                    </InputBox>

                    <InputBox>
                        <InputLabel>Columns</InputLabel>

                        <div id='columns'>
                            {columns.map((column, index) => (
                                <AddSubtaskInputComponent key={index}
                                    value={column.value}
                                    color={column.color}
                                    id={column.id}
                                    onValueChange={handleColumnChange}
                                    onColorChange={handleColorChange}
                                    deleteColumn={delColumn}
                                />
                            ))}
                        </div>
                    </InputBox>

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