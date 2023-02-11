import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const materialProductController = {
  async getMaterialProducts(req: Request, res: Response) {
    try {
      const materialProducts = await prisma.materialProduct.findMany();
      res.status(200).json(materialProducts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getMaterialProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const materialProduct = await prisma.materialProduct.findUnique({
        where: { id },
      });
      res.status(200).json(materialProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createMaterialProduct(req: Request, res: Response) {
    try {
      const { body } = req;
      const materialProduct = await prisma.materialProduct.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(materialProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateMaterialProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const materialProduct = await prisma.materialProduct.update({
        where: { id },
        data: {
          ...body,
        },
      });

      res.status(200).json(materialProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteMaterialProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const materialProduct = await prisma.materialProduct.delete({
        where: { id },
      });

      res.status(200).json(materialProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default materialProductController;
