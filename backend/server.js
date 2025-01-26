import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { addBoard, fetchBoards } from '../src/controllers/boardController.js';
import { fetchColumns } from '../src/controllers/columnController.js';
import { fetchTasks } from '../src/controllers/taskController.js';
import { fetchSubtasks } from '../src/controllers/subtaskController.js';

dotenv.config();

const app = express();

const dbHost = process.env.DB_HOST;
const corsOrigin = process.env.CORS_ORIGIN;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// app.get('/boards', fetchBoards)

// app.get('/boards/:board_id/columns', fetchColumns)

// app.get('/columns/:column_id/tasks', fetchTasks)

// app.get('/tasks/:task_id/subtasks', fetchSubtasks)

app.get('/api/boards', fetchBoards)
app.post('/api/boards/post', addBoard)

app.get('/api/columns', fetchColumns)

app.get('/api/tasks', fetchTasks)

app.get('/api/subtasks', fetchSubtasks)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
