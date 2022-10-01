import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json())

const prisma = new PrismaClient();

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.cadastro.findMany()
  return res.status(200).json(users);
});

app.post('/users', async (req: Request, res: Response) => {
  const body = req.body;

  const user = await prisma.cadastro.create({
    data: {
      nome: body.nome,
      endereco: body.endereco,
      dataNascimento: body.dataNascimento,
      cpf: body.cpf,
      telefone: body.telefone,
      email: body.email,
    }
  });

  return res.status(201).json(user)
});

app.put('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  
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
    }
  });

  return res.status(200).json(updatedUser)
});

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;

  await prisma.cadastro.delete({
    where: {
      id: Number(id),
    },
  });

  return res.status(200).json({ message: "Usuário deletado!" })
});

app.listen(3000, () => console.log('Api rodando na porta 3000'))