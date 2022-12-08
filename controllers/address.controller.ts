import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const addressController = {
  async create(req: Request, res: Response) {
    const { body } = req;
    try {
      const address = await prisma.address.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
