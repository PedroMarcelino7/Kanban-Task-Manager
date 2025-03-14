import { getLastSubtaskId, getSubtasks, insertSubtasks, updateSubtaskIsChecked, updateSubtasks } from "../models/subtaskModel.js";

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

export const editSubtaskIsChecked = async (req, res) => {
    const { subtasks } = req.body

    try {
        const results = await Promise.all(
            subtasks.map(async (subtask) => {
                return await updateSubtaskIsChecked(subtask);
            })
        );

        res.json({ success: true, results });
    } catch (error) {
        res.status(500).json({ error: 'Error editing subtasks' });
    }
}

export const editSubtask = async (req, res) => {
    const { subtasks, taskId } = req.body;

    try {
        const results = await Promise.all(
            subtasks.map(async (subtask) => {
                return await updateSubtasks(subtask, taskId);
            })
        );

        res.json({ success: true, results });
    } catch (error) {
        res.status(500).json({ error: 'Error editing subtasks' });
    }
};

export const fetchLastSubtaskId = async (req, res) => {
    try {
        const id = await getLastSubtaskId()
        res.status(200).json(id[0].id)
    } catch (error) {
        res.status(500).json({ error: 'Error fetching last subtask id' })
    }
}
