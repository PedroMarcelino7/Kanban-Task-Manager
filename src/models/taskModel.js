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

export const insertTask = async (task_name, task_description, column_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            insert into
            tasks (task_name, task_description, task_position, column_id)
            values (?, ?, 1, ?)
        `;

        const values = [task_name, task_description, column_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
