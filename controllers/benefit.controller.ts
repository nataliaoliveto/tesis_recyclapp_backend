import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const benefitController = {
  async getBenefits(req: Request, res: Response) {
    try {
      const benefits = await prisma.benefit.findMany({
        where: {
          isArchived: false,
          isActive: true,
        },
      });

      res.status(200).json(benefits);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getBenefit(req: Request, res: Response) {
    try {
      const benefit = await prisma.benefit.findUnique({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(benefit);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createBenefit(req: Request, res: Response) {
    const { body } = req;
    try {
      const benefit = await prisma.benefit.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(benefit);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateBenefit(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    try {
      const benefit = await prisma.benefit.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(benefit);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteBenefit(req: Request, res: Response) {
    try {
      const benefit = await prisma.benefit.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(benefit);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default benefitController;
