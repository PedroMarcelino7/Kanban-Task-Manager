import { getTasks, insertTask } from "../models/taskModel.js";

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

