// React
import React, { useEffect, useState } from "react";

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Styles
import { Header, Title, Form, AddSubtaskButton, CreateTaskButton } from "./editboardmodal.styles";

// UI Components
import LabeledInput from "../../../ui/inputs/labeledinput/main";
import DeletableInput from "../../../ui/inputs/deletableinput/main";

// Yup Schema
const schema = yup.object({
    name: yup.string().required("Campo obrigatório!"),
    columns: yup.array().of(
        yup.object().shape({
            value: yup.string().required('Campo obrigatório!')
        })
    )
}).required();

const EditBoardModal = ({ data, board_id }) => {

    // Form Validator
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
        resolver: yupResolver(schema)
    });

    //
    //
    // Variables
    const board = data.find((b) => b.board_id === Number(board_id));
    const [columns, setColumns] = useState([]);

    // Use Effect Logs
    useEffect(() => {
        if (board) {
            reset({
                name: board.board_name,
                columns: board.columns.map((col) => ({ value: col.column_name }))
            });
            setColumns(board.columns.map((col) => ({ id: col.column_id, value: col.column_name })));
        }
    }, [board, reset]);

    // Handle Submit
    const onSubmit = async (formData) => {
        try {
            const response = await fetch("http://localhost:3001/api/boards/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    board_id: board.board_id,
                    board_name: formData.name,
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

        setValue(`columns.${columns.findIndex(col => col.id === id)}.value`, newValue)
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

            <Form onSubmit={handleSubmit(onSubmit)}>
                <LabeledInput
                    label="Name"
                    type="text"
                    placeholder="e.g. Web Design"
                    name={{ ...register("name") }}
                    error={errors?.name?.message}
                    onValueChange={(newValue) => setValue("name", newValue)}
                />

                <DeletableInput
                    label="Columns"
                    data={columns}
                    type="text"
                    placeholder="e.g. Todo"
                    onValueChange={handleColumnChange}
                    hasColorInput={true}
                />
                {/* <DeletableInput
                    label="Columns"
                    data={columns}
                    type="text"
                    placeholder="e.g. Todo"
                    onValueChange={handleColumnChange}
                    hasColorInput={true}
                    onColorChange={handleColorChange}
                    closeButton={delColumn}
                /> */}

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
