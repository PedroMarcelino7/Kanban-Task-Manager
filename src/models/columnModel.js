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
// import { connection } from '../../backend/db.js'

// export const getColumns = async (board_id) => {
//     return new Promise((resolve, reject) => {
//         const query = `
//         select *
//         from columns
//         where board_id = ?
//         order by column_position
//         `;

//         connection.query(query, [board_id], (err, results) => {
//             if (err) return reject(err);
//             resolve(results);
//         });
//     });
// };
