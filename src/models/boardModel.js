import { connection } from '../../backend/db.js'

export const getBoards = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select *
            from boards
            where board_deleted = 0
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

export const updateBoard = async (board_id, board_name) => {
    return new Promise((resolve, reject) => {
        const query = `
            update boards
            set board_name = ?
            where board_id = ?
        `

        const values = [board_name, board_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    })
}

export const deleteBoard = async (board_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            update boards
            set board_deleted = 1
            where board_id = ?
        `

        const values = [board_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    })
}

export const getLastBoardId = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select max(board_id) as id
            from boards
        `

        connection.query(query, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}
