import React, { useEffect, useState } from 'react'
import { Header, Title, InputBox, InputLabel, Input, Form, AddSubtaskInput, AddSubtaskButton, CreateTaskButton } from './editboardmodal.styles'
import RemoveSubtask from '../../../assets/icon-cross.svg'
import LabeledInput from '../../../ui/inputs/labeledinput/main'
import DeletableInput from '../../../ui/inputs/deletableinput/main'

const EditBoardModal = ({ data, board_id }) => {
    const board = data[board_id - 1]
    const [boardName, setBoardName] = useState(board.board_name)
    const [columns, setColumns] = useState(board.columns.map((col) => ({ id: col.column_id, value: col.column_name })))

    const editColumns = (id, value) => {
        setColumns((prevColumns) =>
            prevColumns.map((col) => (col.id === id ? { ...col, value } : col))
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/api/boards/update', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_id: board.board_id,
                    board_name: boardName
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

    useEffect(() => {
        console.log('>>> Data [Edit Board Modal]:', board)
        console.log('>>> Board Name [Edit Board Modal]:', boardName)
        console.log('>>> Columns [Edit Board Modal]:', columns)
    }, [])

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
                <Form onSubmit={handleSubmit}>
                    <LabeledInput label='Name' type='text' placeholder='e.g. Web Design' inputValue={boardName} onValueChange={setBoardName} />

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