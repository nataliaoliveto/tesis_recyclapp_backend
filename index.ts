import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // });
}

// main();

app.get('/', async (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  return res.json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      posts: true,
      profile: true,
    },
  });
  return res.json(user);
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
    },
  });
  return res.json(user);
});

const server = app.listen(5000, () => console.log('server ready'));
