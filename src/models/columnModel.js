import { connection } from '../../backend/db.js'

export const getColumns = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select *
            from columns
        `;

        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const insertColumns = async (column, board_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            insert into
            columns (column_name, column_color, column_position, board_id)
            values (?, ?, ?, ?)
        `;

        const values = [column.value, column.color, column.id, board_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
