import { createContext, useContext, useEffect, useReducer } from "react";

const ColumnContext = createContext()

const columnReducer = (state, action) => {
    switch (action.type) {
        case "SET_COLUMNS":
            return action.payload
        case "ADD_COLUMN":
            return [...state, action.payload]
        case "DELETE_COLUMN":
            return state.filter(column => column.id !== action.payload)
        default:
            return state
    }
}

export const ColumnProvider = ({ children }) => {
    const [columns, dispatch] = useReducer(columnReducer, [])

    const fetchColumns = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/columns')
            const data = await response.json()
            dispatch({ type: "SET_COLUMNS", payload: data });
        } catch (error) {
            console.error("Erro ao buscar columns:", error);
        }
    }

    const refreshColumns = async () => {
        console.log("🔄 Atualizando columns...");
        await fetchColumns(); // Chama a função que busca os boards novamente
    };

    useEffect(() => {
        fetchColumns();
    }, []);

    return (
        <ColumnContext.Provider value={{ columns, refreshColumns, dispatch }}>
            {children}
        </ColumnContext.Provider>
    );
}

export const useColumns = () => {
    return useContext(ColumnContext);
};