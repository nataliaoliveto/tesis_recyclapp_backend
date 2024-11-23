import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const commentController = {
  async getComments(req: Request, res: Response) {
    try {
      const comment = await prisma.comment.findMany();
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getComment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const comment = await prisma.comment.findUnique({
        where: { id: id },
      });
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getCommentsByPostId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const comment = await prisma.comment.findMany({
        where: { postId: id },
      });
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createComment(req: Request, res: Response) {
    try {
      const { body } = req;
      const comment = await prisma.comment.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateComment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const comment = await prisma.comment.update({
        where: { id: id },
        data: {
          ...body,
        },
      });

      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteComment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const comment = await prisma.comment.delete({
        where: { id: id },
      });

      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default commentController;
