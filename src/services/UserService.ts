import { PrismaClient } from '@prisma/client';
import { IBody } from '../interfaces/users.interfaces';

const prisma = new PrismaClient();

const getAllUsers = async () => {
  const users = await prisma.cadastro.findMany();
  return users;
}

const createUser = async (body: IBody) => {
  const day = body.dataNascimento.split('/');
  const convertDate = new Date(`${day[1]}/${day[0]}/${day[2]}`);

  const user = await prisma.cadastro.create({
    data: {
      nome: body.nome,
      endereco: body.endereco,
      dataNascimento: convertDate,
      cpf: body.cpf,
      telefone: body.telefone,
      email: body.email,
      cidade: body.cidade,
      status: 'Pendente',
      password: body.password,
    }
  });

  return user;
}

const updateUser = async (id: number, body: IBody) => {
  const updatedUser = await prisma.cadastro.update({
    where: {
      id: id,
    },
    data: {
      nome: body.nome,
      endereco: body.endereco,
      dataNascimento: body.dataNascimento,
      cpf: body.cpf,
      telefone: body.telefone,
      email: body.email,
      cidade: body.cidade,
      status: body.status,
      password: body.password,
    }
  });

  return updatedUser;
}

const deleteUser = async (id: number) => {
  await prisma.cadastro.delete({
    where: {
      id: id,
    },
  });
}

export default {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
}
