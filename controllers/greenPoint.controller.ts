import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const greenPointController = {
  async getGreenPoints(req: Request, res: Response) {
    try {
      const greenPoint = await prisma.greenPoint.findMany();
      res.status(200).json(greenPoint);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getGreenPoint(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const greenPoint = await prisma.greenPoint.findUnique({
        where: { id: Number(id) },
      });
      res.status(200).json(greenPoint);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createGreenPoint(req: Request, res: Response) {
    try {
      const { body } = req;
      const greenPoint = await prisma.greenPoint.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(greenPoint);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateGreenPoint(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const greenPoint = await prisma.greenPoint.update({
        where: { id: Number(id) },
        data: {
          ...body,
        },
      });

      res.status(200).json(greenPoint);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteGreenPoint(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const greenPoint = await prisma.greenPoint.delete({
        where: { id: Number(id) },
      });

      res.status(200).json(greenPoint);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default greenPointController;
