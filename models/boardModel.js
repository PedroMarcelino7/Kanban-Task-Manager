import { connection } from '../../backend/db.js'

export const getBoards = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM boards';

        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
