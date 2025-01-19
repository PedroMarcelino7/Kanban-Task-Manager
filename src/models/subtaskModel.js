import { connection } from '../../backend/db.js'

export const getSubtasks = async () => {
    return new Promise((resolve, reject) => {
        const query = `
        select *
        from subtasks
        `;

        connection.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
// import { connection } from '../../backend/db.js'

// export const getSubtasks = async (task_id) => {
//     return new Promise((resolve, reject) => {
//         const query = `
//         select *
//         from subtasks
//         where task_id = ?
//         order by task_id;
//         `;

//         connection.query(query, [task_id], (err, results) => {
//             if (err) return reject(err);
//             resolve(results);
//         });
//     });
// };
