// React
import React, { useEffect, useState } from "react";
import { useModal } from "../main";
import { useColumns } from "../../../contexts/ColumnContext";
import { useBoards } from "../../../contexts/BoardContext";

// Styles
import { Header, Title, Form } from "./editboardmodal.styles";

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

    const { columns, refreshColumns } = useColumns()
    const { refreshBoards } = useBoards()

    const columnsInBoard = columns.filter(column => column.board_id === board.board_id)

    const [boardName, setBoardName] = useState(board.board_name)
    const [columnsEdit, setColumns] = useState(columnsInBoard);

    const [inputErrors, setInputErrors] = useState([])

    // Handle Submit
    const onSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            console.log("Formulário inválido. Corrija os erros antes de enviar.");
            return;
        }

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

            refreshBoards()
        } catch (error) {
            console.error("Erro ao editar o board:", error);
        }

        try {
            const response = await fetch("http://localhost:3001/api/columns/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    columnsEdit
                }),
            });

            const data = await response.json();
            console.log(">>> Resposta Columns [Edit Board Modal]:", data);

            refreshColumns()
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
        console.log("Colunas após atualização:", columnsEdit);
    }, [columnsEdit]);

    //
    //
    // Other Functions
    const validateForm = () => {
        let errors = [];

        if (!boardName || boardName === '') {
            errors.push('board');
        }

        const hasEmptyColumn = columnsEdit.some(column => column.column_name === '');
        if (hasEmptyColumn) {
            errors.push('columns');
        }

        setInputErrors(errors);

        return errors.length === 0;
    };

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

        console.log("Colunas após mudança de cor:", columnsEdit);
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
                    error={inputErrors.some(input => input === 'board')}
                />

                <DeletableInput
                    label="Columns"
                    data={columnsEdit}
                    dataValue='column_name'
                    idReference='column_id'
                    type="text"
                    placeholder="e.g. Todo"
                    onValueChange={handleColumnChange}
                    hasColorInput={true}
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
                    label='Save Changes'
                    type='submit'
                    negativemargin="true"
                />
            </Form>
        </>
    );
};

export default EditBoardModal;
