import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const postCommitmentController = {
  async getPostCommitments(req: Request, res: Response) {
    try {
      const postCommitments = await prisma.postCommitment.findMany();
      res.status(200).json(postCommitments);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getPostCommitment(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const postCommitment = await prisma.postCommitment.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(postCommitment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createPostCommitment(req: Request, res: Response) {
    const { body } = req;
    try {
      const postCommitment = await prisma.postCommitment.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(postCommitment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updatePostCommitment(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    try {
      const postCommitment = await prisma.postCommitment.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(postCommitment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deletePostCommitment(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const postCommitment = await prisma.postCommitment.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(postCommitment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default postCommitmentController;
