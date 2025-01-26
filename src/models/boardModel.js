import { connection } from '../../backend/db.js'

export const getBoards = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select *
            from boards
        `;

        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const insertBoard = async (board_name) => {
    return new Promise((resolve, reject) => {
        const query = `
            insert into
            boards (board_name, user_id)
            values (?, 1)
        `

        const values = [board_name]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    })
}
