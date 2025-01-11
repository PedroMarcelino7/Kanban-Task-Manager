import { getBoards } from "../models/boardModel";

export const fetchBoards = async (req, res) => {
    try {
        const boards = await getBoards();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching boards' });
    }
};
