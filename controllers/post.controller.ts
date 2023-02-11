import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const postController = {
  async getPosts(req: Request, res: Response) {
    try {
      const post = await prisma.post.findMany();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getPost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUnique({
        where: { id: id },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createPost(req: Request, res: Response) {
    try {
      const { body } = req;
      const post = await prisma.post.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updatePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const post = await prisma.post.update({
        where: { id: id },
        data: {
          ...body,
        },
      });

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const post = await prisma.post.delete({
        where: { id: id },
      });

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default postController;
