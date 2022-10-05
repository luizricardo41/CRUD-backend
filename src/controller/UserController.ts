import { Request, Response } from 'express';
import UserService from '../services/UserService';

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const createUser = async (req: Request, res: Response) => {
  const body = req.body;
  const user = await UserService.createUser(body);

  return res.status(201).json(user);
};

const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const body = req.body;
  
  const updatedUser = await UserService.updateUser(id, body);

  return res.status(200).json(updatedUser)
}

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  await UserService.deleteUser(Number(id));

  return res.status(200).json({ message: "Usuário deletado!" });
}

export default {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
}
