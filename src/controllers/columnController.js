import { getColumns, insertColumns } from "../models/columnModel.js";

export const fetchColumns = async (req, res) => {
    try {
        const columns = await getColumns();
        res.status(200).json(columns);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching columns' });
    }
};

export const addColumn = async (req, res) => {
    const { columns, board_id } = req.body;

    try {
        const results = await Promise.all(
            columns.map(async (column) => {
                return await insertColumns(column, board_id);
            })
        );

        res.json({ success: true, results });
    } catch (error) {
        res.status(500).json({ error: 'Error adding column' });
    }
};
