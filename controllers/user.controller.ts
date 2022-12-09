const { PrismaClient } = require("@prisma/client");
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const userController = {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async createUser(req: Request, res: Response) {
    const { body } = req;
    try {
      const user = await prisma.user.create({
        data: {
          ...body,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async updateUser(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    try {
      const user = await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

module.exports = userController;
