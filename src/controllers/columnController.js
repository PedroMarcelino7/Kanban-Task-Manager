import { getColumns, getLastColumnId, insertColumns, updateColumns } from "../models/columnModel.js";

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

export const editColumn = async (req, res) => {
    const { columns, boardId } = req.body;

    try {
        const results = await Promise.all(
            columns.map(async (column) => {
                return await updateColumns(column, boardId);
            })
        );

        res.json({ success: true, results });
    } catch (error) {
        res.status(500).json({ error: 'Error editing columns' });
    }
};

export const fetchLastColumnId = async (req, res) => {
    try {
        const id = await getLastColumnId()
        res.status(200).json(id[0].id)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching last column id' })
    }
}
