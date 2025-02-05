import { getLastTaskId, getTasks, insertTask, updateTask, updateTaskStatus } from "../models/taskModel.js";

export const fetchTasks = async (req, res) => {
    try {
        const tasks = await getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

export const addTask = async (req, res) => {
    const { task_name, task_description, column_id } = req.body

    try {
        const task = await insertTask(task_name, task_description, column_id);
        res.json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: 'Error adding task' });
    }
};

export const fetchLastTaskId = async (req, res) => {
    try {
        const id = await getLastTaskId()
        res.status(200).json(id)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching task id' });
    }
}

export const editTaskStatus = async (req, res) => {
    const { column_id, task_id } = req.body

    try {
        const task = await updateTaskStatus(column_id, task_id);
        res.json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: 'Error editing task' });
    }
}

export const editTask = async (req, res) => {
    const { task_id, task_name, task_description } = req.body

    try {
        const task = await updateTask(task_id, task_name, task_description);
        res.json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: 'Error editing task' });
    }
}

