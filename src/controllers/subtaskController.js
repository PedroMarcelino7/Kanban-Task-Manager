import { getSubtasks, insertSubtasks } from "../models/subtaskModel.js";

export const fetchSubtasks = async (req, res) => {
    try {
        const subtasks = await getSubtasks();
        res.status(200).json(subtasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching subtasks' });
    }
};

export const addSubtask = async (req, res) => {
    const { subtasks, task_id } = req.body

    try {
        const results = await Promise.all(
            subtasks.map(async (subtask) => {
                return await insertSubtasks(subtask, task_id);
            })
        );

        res.json({ success: true, results });
    } catch (error) {
        res.status(500).json({ error: 'Error adding subtasks' });
    }
}
