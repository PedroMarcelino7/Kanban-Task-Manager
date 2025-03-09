import { createContext, useContext, useEffect, useReducer } from "react";

const SubtaskContext = createContext()

const subtaskReducer = (state, action) => {
    switch (action.type) {
        case "SET_SUBTASKS":
            return action.payload
        case "ADD_SUBTASK":
            return [...state, action.payload]
        case "DELETE_SUBTASK":
            return state.filter(subtask => subtask.id !== action.payload)
        default:
            return state
    }
}

export const SubtaskProvider = ({ children }) => {
    const [subtasks, dispatch] = useReducer(subtaskReducer, [])

    const fetchSubtasks = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/subtasks')
            const data = await response.json()
            dispatch({ type: "SET_SUBTASKS", payload: data })
        } catch (error) {
            console.error("Erro ao buscar subtasks:", error);
        }
    }

    const refreshSubtasks = async () => {
        console.log("🔄 Atualizando tasks...");
        await fetchSubtasks();
    }

    useEffect(() => {
        fetchSubtasks()
    }, [])

    return (
        <SubtaskContext.Provider value={{ subtasks, refreshSubtasks, dispatch }}>
            {children}
        </SubtaskContext.Provider>
    )
}

export const useSubtasks = () => {
    return useContext(SubtaskContext);
};