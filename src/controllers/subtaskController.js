import { getSubtasks } from "../models/subtaskModel.js";

export const fetchSubtasks = async (req, res) => {
    try {
        const subtasks  = await getSubtasks();
        res.status(200).json(subtasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching subtasks' });
    }
};
// import { getSubtasks } from "../models/subtaskModel.js";

// export const fetchSubtasks = async (req, res) => {
//     const { task_id } = req.params

//     try {
//         const subtasks  = await getSubtasks(task_id);
//         res.status(200).json(subtasks);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching subtasks' });
//     }
// };
