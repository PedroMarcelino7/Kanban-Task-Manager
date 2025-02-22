import React, { createContext, useState, useEffect, useContext } from "react";

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {
    const [boardId, setBoardId] = useState(1);

    // useEffect(() => {

    // }, []);

    return (
        <BoardContext.Provider value={{ boardId }}>
            {children}
        </BoardContext.Provider>
    );
};

export const getBoardId = () => useContext(BoardContext);
