import { getBoards, insertBoard } from "../models/boardModel.js";

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