import { createContext, useContext, useEffect, useReducer } from "react";

const BoardContext = createContext();

const boardReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOARDS":
            return action.payload;
        case "ADD_BOARD":
            return [...state, action.payload];
        case "DELETE_BOARD":
            return state.filter(board => board.id !== action.payload);
        default:
            return state;
    }
};

export const BoardProvider = ({ children }) => {
    const [boards, dispatch] = useReducer(boardReducer, []);

    const fetchBoards = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/boards");
            const data = await response.json();
            dispatch({ type: "SET_BOARDS", payload: data });
        } catch (error) {
            console.error("Erro ao buscar boards:", error);
        }
    };

    const refreshBoards = async () => {
        console.log("🔄 Atualizando boards...");
        await fetchBoards();
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <BoardContext.Provider value={{ boards, refreshBoards, dispatch }}>
            {children}
        </BoardContext.Provider>
    );
};

export const useBoards = () => {
    return useContext(BoardContext);
};
