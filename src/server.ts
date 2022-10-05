import express, { Request, Response } from 'express';
import cors from 'cors';

import UserController from './controller/UserController';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/users', UserController.getAllUsers);

app.post('/users', UserController.createUser);

app.put('/users/:id', UserController.updateUser);

app.delete('/users/:id', UserController.deleteUser);

app.listen(3000, () => console.log('Api rodando na porta 3000'));
