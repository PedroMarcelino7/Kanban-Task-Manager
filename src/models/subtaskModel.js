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

export const updateSubtaskIsChecked = async (subtask) => {
    return new Promise((resolve, reject) => {
        const query = `
            update subtasks
            set subtask_ischecked = ?
            where subtask_id = ?
        `

        const values = [subtask.subtask_ischecked, subtask.subtask_id]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}

export const updateSubtasks = async (subtask, taskId) => {
    return new Promise((resolve, reject) => {
        const query = `
            insert into
            subtasks (subtask_id, subtask_name, task_id)
            values (?, ?, ?)
            on duplicate key update
                subtask_name = values (subtask_name)
        `;

        const values = [subtask.subtask_id, subtask.subtask_name, taskId]

        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

export const getLastSubtaskId = async () => {
    return new Promise((resolve, reject) => {
        const query = `
            select max(subtask_id) as id
            from subtasks
        `

        connection.query(query, (err, results) => {
            if (err) return reject(err)
            resolve(results)
        })
    })
}