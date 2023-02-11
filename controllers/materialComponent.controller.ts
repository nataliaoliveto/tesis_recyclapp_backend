import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const materialComponentController = {
  async getMaterialComponents(req: Request, res: Response) {
    try {
      const materialComponent = await prisma.materialProduct.findMany();
      res.status(200).json(materialComponent);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getMaterialComponent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const materialComponent = await prisma.materialComponent.findUnique({
        where: { id },
      });
      res.status(200).json(materialComponent);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createMaterialComponent(req: Request, res: Response) {
    try {
      const { body } = req;
      const materialComponent = await prisma.materialComponent.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(materialComponent);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateMaterialComponent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const materialComponent = await prisma.materialComponent.update({
        where: { id },
        data: {
          ...body,
        },
      });

      res.status(200).json(materialComponent);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteMaterialComponent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const materialComponent = await prisma.materialComponent.delete({
        where: { id },
      });

      res.status(200).json(materialComponent);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default materialComponentController;
