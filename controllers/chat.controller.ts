import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const chatController = {
  async getChats(req: Request, res: Response) {
    try {
      const chats = await prisma.chat.findMany();
      res.status(200).json(chats);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getChat(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chat = await prisma.chat.findUnique({
        where: { id: id },
      });
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createChat(req: Request, res: Response) {
    try {
      const { body } = req;
      const chat = await prisma.chat.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateChat(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const chat = await prisma.chat.update({
        where: { id },
        data: {
          ...body,
        },
      });

      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteChat(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chat = await prisma.chat.delete({
        where: { id },
      });

      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default chatController;
