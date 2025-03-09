import { createContext, useContext, useEffect, useReducer } from "react";

const TaskContext = createContext()

const taskReducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return action.payload
        case "ADD_TASK":
            return [...state, action.payload]
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload)
        default:
            return state
    }
}

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/tasks')
            const data = await response.json()
            dispatch({ type: "SET_TASKS", payload: data })
        } catch (error) {
            console.error("Erro ao buscar tasks:", error);
        }
    }

    const refreshTasks = async () => {
        console.log("🔄 Atualizando tasks...");
        await fetchTasks();
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <TaskContext.Provider value={{ tasks, refreshTasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = () => {
    return useContext(TaskContext);
};