import React, { createContext, useState, useContext, useEffect } from "react"

export const BoardContext = createContext()

export const BoardContextProvider = ({ children }) => {
    const [boardId, setBoardId] = useState(1)

    useEffect(() => {
        getFirstBoardId()
    }, [])

    const getFirstBoardId = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/boards/firstid')
            const data = await response.json()
            
            setBoardId(data[0].id)

            console.log('>>> Resposta Get First Board Id [Board Context]:', data);
        } catch (error) {
            console.error('Erro ao receber o first board id:', error);
        }
    }

    const updateBoardId = (newId) => {
        setBoardId(newId)
    }

    return (
        <BoardContext.Provider value={{ boardId, updateBoardId, getFirstBoardId }}>
            {children}
        </BoardContext.Provider>
    )
}

export const getBoardId = () => useContext(BoardContext)