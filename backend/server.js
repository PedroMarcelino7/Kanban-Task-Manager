import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { addBoard, delAllBoards, delBoard, editBoard, fetchBoards, fetchFirstBoardId, fetchLastBoardId } from '../src/controllers/boardController.js';
import { addColumn, editColumn, fetchColumns } from '../src/controllers/columnController.js';
import { addTask, delTask, editTask, editTaskStatus, fetchLastTaskId, fetchTasks } from '../src/controllers/taskController.js';
import { addSubtask, editSubtask, editSubtaskIsChecked, fetchSubtasks } from '../src/controllers/subtaskController.js';

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

app.get('/api/boards', fetchBoards)
app.post('/api/boards/post', addBoard)
app.post('/api/boards/update', editBoard)
app.post('/api/boards/delete', delBoard)
app.get('/api/boards/lastid', fetchLastBoardId)
app.get('/api/boards/firstid', fetchFirstBoardId)
app.post('/api/boards/delete/all', delAllBoards)

app.get('/api/columns', fetchColumns)
app.post('/api/columns/post', addColumn)
app.post('/api/columns/update', editColumn)

app.get('/api/tasks', fetchTasks)
app.get('/api/tasks/lastid', fetchLastTaskId)
app.post('/api/tasks/post', addTask)
app.post('/api/tasks/status/update', editTaskStatus)
app.post('/api/tasks/update', editTask)
app.post('/api/tasks/delete', delTask)

app.get('/api/subtasks', fetchSubtasks)
app.post('/api/subtasks/post', addSubtask)
app.post('/api/subtasks/ischecked/update', editSubtaskIsChecked)
app.post('/api/subtasks/update', editSubtask)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
