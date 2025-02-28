// React
import React, { useEffect, useState } from "react";
import { useModal } from "../main";

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from "./editboardmodal.styles";

// UI Components
import LabeledInput from "../../../ui/inputs/labeledinput/main";
import DeletableInput from "../../../ui/inputs/deletableinput/main";
import DefaultButton from "../../../ui/buttons/defaultButton/main";

//
//
//
const EditBoardModal = ({ board }) => {
    // Variables
    const { closeModal } = useModal()
    const [boardName, setBoardName] = useState(board.board_name)
    const [columns, setColumns] = useState(board.columns);

    // Handle Submit
    const onSubmit = async (e) => {
        e.preventDefault()

        console.log('>>> Columns on submit [Edit Board Modal]:', columns)

        try {
            const response = await fetch("http://localhost:3001/api/boards/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    board_id: board.board_id,
                    board_name: boardName,
                }),
            });

            const data = await response.json();
            console.log(">>> Resposta Board [Edit Board Modal]:", data);
        } catch (error) {
            console.error("Erro ao editar o board:", error);
        }

        try {
            const response = await fetch("http://localhost:3001/api/columns/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    columns
                }),
            });

            const data = await response.json();
            console.log(">>> Resposta Columns [Edit Board Modal]:", data);
        } catch (error) {
            console.error("Erro ao editar as colunas:", error);
        }

        closeModal(false)
    };

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Board [Edit Board Modal]:', board)
    }, [])

    useEffect(() => {
        console.log("Colunas após atualização:", columns);
    }, [columns]);

    //
    //
    // Other Functions
    const handleColumnChange = (id, newValue) => {
        setColumns(prevColumns =>
            prevColumns.map(column =>
                column.column_id === id ? { ...column, column_name: newValue } : column
            )
        );
    };

    const handleColorChange = (id, newColor) => {
        setColumns(prevColumns =>
            prevColumns.map(column =>
                column.id === id ? { ...column, color: newColor } : column
            )
        );

        console.log("Colunas após mudança de cor:", columns); // Debug para ver as mudanças
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
            <Header>
                <Title>Edit Board</Title>
            </Header>

            <Form onSubmit={(e) => onSubmit(e)}>
                <LabeledInput
                    label="Name"
                    type="text"
                    placeholder="e.g. Web Design"
                    value={boardName}
                    onValueChange={setBoardName}
                />

                <DeletableInput
                    label="Columns"
                    data={columns}
                    dataValue='column_name'
                    idReference='column_id'
                    type="text"
                    placeholder="e.g. Todo"
                    onValueChange={handleColumnChange}
                    hasColorInput={true}
                    closeButton={delColumn}
                />

                <DefaultButton
                    label='+ Add New Column'
                    onClick={addNewColumn}
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
    );
};

export default EditBoardModal;
