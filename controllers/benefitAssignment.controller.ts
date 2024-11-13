import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const benefitAssignmentController = {
  async getBenefitAssignments(req: Request, res: Response) {
    try {
      const benefitAssignments = await prisma.benefitAssignment.findMany({
        where: {
          isActive: true,
        },
      });

      res.status(200).json(benefitAssignments);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getBenefitAssignment(req: Request, res: Response) {
    try {
      const benefitAssignment = await prisma.benefitAssignment.findUnique({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createBenefitAssignment(req: Request, res: Response) {
    const { body } = req;
    try {
      const benefitAssignment = await prisma.benefitAssignment.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateBenefitAssignment(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;
    try {
      const benefitAssignment = await prisma.benefitAssignment.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async deleteBenefitAssignment(req: Request, res: Response) {
    try {
      const benefitAssignment = await prisma.benefitAssignment.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default benefitAssignmentController;
