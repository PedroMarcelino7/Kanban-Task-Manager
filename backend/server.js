import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fetchBoards } from '../src/controllers/boardController.js';
import { fetchColumns } from '../src/controllers/columnController.js';
import { fetchTasks } from '../src/controllers/taskController.js';

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

app.get('/boards', fetchBoards)

app.get('/boards/:board_id/columns', fetchColumns)

app.get('/columns/:column_id/tasks', fetchTasks)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
