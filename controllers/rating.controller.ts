import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const ratingController = {
  async getRatings(req: Request, res: Response) {
    try {
      const ratings = await prisma.rating.findMany();
      res.status(200).json(ratings);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getRating(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const rating = await prisma.rating.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(rating);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createRating(req: Request, res: Response) {
    const { body } = req;
    try {
      const rating = await prisma.rating.create({
        data: {
          ...body,
        },
      });
      res.status(201).json(rating);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateRating(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    try {
      const rating = await prisma.rating.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(rating);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteRating(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const rating = await prisma.rating.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(rating);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default ratingController;
