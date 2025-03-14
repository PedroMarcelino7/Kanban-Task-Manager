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

export const updateColumns = async (column, boardId) => {
    return new Promise((resolve, reject) => {
        const query = `
        insert into
        columns (column_id, column_name, column_color, column_position, board_id) 
        values
            (?, ?, ?, ?, ?)
        on duplicate key update
            column_name = values(column_name),
            column_color = values(column_color);
        `;

        const values = [column.column_id, column.column_name, column.column_color, column.column_id, boardId]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const getLastColumnId = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select max(column_id) as id
            from columns
        `

        connection.query(query, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}
