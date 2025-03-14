// React
import React, { useEffect, useState } from "react";
import { useModal } from "../main";
import { useColumns } from "../../../contexts/ColumnContext";
import { useBoards } from "../../../contexts/BoardContext";
import { useToast } from "../../../contexts/ToastContext";

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

    const { showToast } = useToast()

    const { columns, refreshColumns } = useColumns()
    const { refreshBoards } = useBoards()

    const columnsInBoard = columns.filter(column => column.board_id === board.board_id)

    const [boardName, setBoardName] = useState(board.board_name)
    const [columnsEdit, setColumns] = useState(columnsInBoard);
    const [newColumnId, setNewColumnId] = useState(0)
    const [addedColumnsCount, setAddedColumnsCount] = useState(0)

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
                    columns: columnsEdit,
                    boardId: board.board_id
                }),
            });

            const data = await response.json();
            console.log(">>> Resposta Columns [Edit Board Modal]:", data);

            refreshColumns()
        } catch (error) {
            console.error("Erro ao editar as colunas:", error);
        }

        showToast({ type: "timed", message: "Board successfully edited!", status: "success" })
        closeModal()
    };

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Board [Edit Board Modal]:', board)
        console.log(">>> Colums Edit [Edit Board Modal]:", columnsEdit);
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
                column.id === id ? { ...column, column_color: newColor } : column
            )
        );

        console.log("Colunas após mudança de cor:", columnsEdit);
    };
    const addNewColumn = () => {
        setColumns((prevColumns) => [
            ...prevColumns,
            { column_id: newColumnId, column_name: "", column_color: "#000" },
        ]);
        setAddedColumnsCount(addedColumnsCount + 1)
    };

    const delColumn = (id) => {
        setColumns((prevColumns) => prevColumns.filter((column) => column.column_id !== id));
        console.log('Coluna deletada:', columnsEdit.find(column => column.column_id === id))
        setAddedColumnsCount(addedColumnsCount - 1)
    };

    const getLastColumnId = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/columns/lastid')
            const data = await response.json()

            console.log('Last Column Id:', data)
            setNewColumnId(data + (addedColumnsCount + 1))
        } catch (error) {
            console.error("Erro ao editar as colunas:", error);
        }
    }

    useEffect(() => {
        getLastColumnId()
    }, [])

    useEffect(() => {
        console.log('addedColumnsCount:', addedColumnsCount)
    }, [addedColumnsCount])

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
