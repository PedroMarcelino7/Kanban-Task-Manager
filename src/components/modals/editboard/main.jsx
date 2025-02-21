// React
import React, { useState } from "react";

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from "./editboardmodal.styles";

// UI Components
import LabeledInput from "../../../ui/inputs/labeledinput/main";
import DeletableInput from "../../../ui/inputs/deletableinput/main";

//
//
//
const EditBoardModal = ({ data, board_id }) => {
    // Variables
    const board = data.find((b) => b.board_id === Number(board_id));
    const [boardName, setBoardName] = useState('')
    const [columns, setColumns] = useState([]);

    // Use Effect Logs

    // Handle Submit
    const onSubmit = async (e) => {
        e.preventDefault()

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
                body: JSON.stringify({ columns }),
            });

            const data = await response.json();
            console.log(">>> Resposta Columns [Edit Board Modal]:", data);
        } catch (error) {
            console.error("Erro ao editar as colunas:", error);
        }
    };

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
                column.id === id ? { ...column, value: newValue } : column
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
                    type="text"
                    placeholder="e.g. Todo"
                    onValueChange={handleColumnChange}
                    hasColorInput={true}
                />

                <AddSubtaskButton type="button" onClick={addNewColumn}>
                    + Add New Column
                </AddSubtaskButton>

                <CreateTaskButton type="submit">
                    Save Changes
                </CreateTaskButton>
            </Form>
        </>
    );
};

export default EditBoardModal;
