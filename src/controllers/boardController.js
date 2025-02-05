import { deleteBoard, getBoards, insertBoard, updateBoard } from "../models/boardModel.js";

export const fetchBoards = async (req, res) => {
    try {
        const boards = await getBoards();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching boards' });
    }
};

export const addBoard = async (req, res) => {
    const { board_name } = req.body

    try {
        const board = await insertBoard(board_name);
        res.json({ success: true, board });
    } catch (error) {
        res.status(500).json({ error: 'Error adding board' })
    }
}

export const editBoard = async (req, res) => {
    const { board_id, board_name } = req.body

    try {
        const board = await updateBoard(board_id, board_name);
        res.json({ success: true, board });
    } catch (error) {
        res.status(500).json({ error: 'Error editing board name' })
    }
}

export const delBoard = async (req, res) => {
    const { board_id } = req.body

    try {
        const board = await deleteBoard(board_id);
        res.json({ success: true, board });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting board' })
    }
}