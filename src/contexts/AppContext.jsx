import React, { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const boards = await fetch("http://localhost:3001/api/boards").then(res => res.json());
                const columns = await fetch("http://localhost:3001/api/columns").then(res => res.json());
                const tasks = await fetch("http://localhost:3001/api/tasks").then(res => res.json());
                const subtasks = await fetch("http://localhost:3001/api/subtasks").then(res => res.json());

                const structuredData = boards.map(board => ({
                    ...board,
                    columns: columns
                        .filter(column => column.board_id === board.board_id)
                        .map(column => ({
                            ...column,
                            tasks: tasks
                                .filter(task => task.column_id === column.column_id)
                                .map(task => ({
                                    ...task,
                                    subtasks: subtasks.filter(
                                        subtask => subtask.task_id === task.task_id
                                    )
                                }))
                        }))
                }));

                console.log('>>> Dados Estruturados:', structuredData)
                setData(structuredData);
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ data, loading }}>
            {children}
        </AppContext.Provider>
    );
};

export const appData = () => useContext(AppContext);
