import { connection } from '../../backend/db.js'

export const getTasks = async () => {
    return new Promise((resolve, reject) => {
        const query = `
        select *
        from tasks
        `;

        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
// import { connection } from '../../backend/db.js'

// export const getTasks = async (column_id) => {
//     return new Promise((resolve, reject) => {
//         const query = `
//         select *
//         from tasks
//         where column_id = ?
//         order by task_position
//         `;

//         connection.query(query, [column_id], (err, results) => {
//             if (err) return reject(err);
//             resolve(results);
//         });
//     });
// };
