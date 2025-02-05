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

export const getLastTaskId = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select max(task_id) as id
            from tasks;
        `

        connection.query(query, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}

export const updateTaskStatus = async (column_id, task_id) => {
    return new Promise((resolve, reject) => {
        const query = `
            update tasks
            set column_id = ?
            where task_id = ?
        `;

        const values = [column_id, task_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const updateTask = async (task_id, task_name, task_description) => {
    return new Promise((resolve, reject) => {
        const query = `
            update tasks
            set task_name = ?, task_description = ?
            where task_id = ?
        `;

        const values = [task_name, task_description, task_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
