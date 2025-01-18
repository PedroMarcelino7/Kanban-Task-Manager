import { getColumns } from "../models/columnModel.js";

export const fetchColumns = async (req, res) => {
    const { board_id } = req.params

    try {
        const columns  = await getColumns(board_id);
        res.status(200).json(columns);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching columns' });
    }
};
