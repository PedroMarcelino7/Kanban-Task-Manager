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

export const insertSubtasks = async (subtask, task_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            insert into
            subtasks (subtask_name, task_id)
            values (?, ?)
        `

        const values = [subtask.value, task_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}
