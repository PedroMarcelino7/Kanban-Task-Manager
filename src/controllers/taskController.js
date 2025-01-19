import { getTasks } from "../models/taskModel.js";

export const fetchTasks = async (req, res) => {
    try {
        const tasks  = await getTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};
// import { getTasks } from "../models/taskModel.js";

// export const fetchTasks = async (req, res) => {
//     const { column_id } = req.params

//     try {
//         const tasks  = await getTasks(column_id);
//         res.status(200).json(tasks);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching tasks' });
//     }
// };
