import { createContext, useContext, useEffect, useReducer } from "react";

const BoardContext = createContext();

const boardReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOARDS":
            return action.payload; // Atualiza a lista completa de boards
        case "ADD_BOARD":
            return [...state, action.payload]; // Adiciona um novo board
        case "DELETE_BOARD":
            return state.filter(board => board.id !== action.payload); // Remove um board específico
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

    // Atualiza os boards manualmente (ex: após um CRUD)
    const refreshBoards = async () => {
        console.log("🔄 Atualizando boards...");
        await fetchBoards(); // Chama a função que busca os boards novamente
    };

    // Carrega os boards assim que o contexto for montado
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
