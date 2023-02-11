import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const chatMessageController = {
  async getChatMessages(req: Request, res: Response) {
    try {
      const chatMessages = await prisma.chatMessage.findMany();
      res.status(200).json(chatMessages);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getChatMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chatMessage = await prisma.chatMessage.findUnique({
        where: { id },
      });
      res.status(200).json(chatMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createChatMessage(req: Request, res: Response) {
    try {
      const { body } = req;
      const chatMessage = await prisma.chatMessage.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(chatMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateChatMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const chatMessage = await prisma.chatMessage.update({
        where: { id },
        data: {
          ...body,
        },
      });

      res.status(200).json(chatMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteChatMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const chatMessage = await prisma.chatMessage.delete({
        where: { id },
      });

      res.status(200).json(chatMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default chatMessageController;
