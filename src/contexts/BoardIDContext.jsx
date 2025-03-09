import React, { createContext, useState, useContext } from "react"

export const BoardContext = createContext()

export const BoardContextProvider = ({ children }) => {
    const [boardId, setBoardId] = useState(1)

    const updateBoardId = (newId) => {
        setBoardId(newId)
    }

    return (
        <BoardContext.Provider value={{ boardId, updateBoardId }}>
            {children}
        </BoardContext.Provider>
    )
}

export const getBoardId = () => useContext(BoardContext)