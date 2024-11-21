import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import { generateRandomWord } from "../utils/generateRandomWord";

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
          isActive: true,
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getBenefitAssignmentsUserCustomer(req: Request, res: Response) {
    try {
      const benefitAssignments = await prisma.benefitAssignment.findMany({
        where: {
          isActive: true,
          userCustomerId: req.params.id,
        },
      });

      res.status(200).json(benefitAssignments);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getBenefitAssignmentsByStoreBenefits(req: Request, res: Response) {
    console.log("req body", req.body);
    const { benefitIds } = req.body;
    if (!Array.isArray(benefitIds) || benefitIds.length === 0) {
      return res.status(400).json({ error: "No hay beneficios asociados." });
    }

    try {
      const benefitAssignments = await prisma.benefitAssignment.findMany({
        where: {
          isActive: true,
          benefitId: {
            in: benefitIds,
          },
        },
      });

      console.log("benefitAssignments", benefitAssignments);
      res.status(200).json(benefitAssignments);
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
          generatedCode: generateRandomWord().toUpperCase(),
        },
      });
      res.status(200).json(benefitAssignment);
    } catch (error) {
      console.log(error);
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
