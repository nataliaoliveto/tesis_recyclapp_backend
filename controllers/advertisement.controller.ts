import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const advertisementController = {
  async getAdvertisements(req: Request, res: Response) {
    try {
      const advertisements = await prisma.advertisement.findMany();
      res.status(200).json(advertisements);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getAdvertisement(req: Request, res: Response) {
    try {
      const advertisement = await prisma.advertisement.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createAdvertisement(req: Request, res: Response) {
    try {
      const { body } = req;
      const advertisement = await prisma.advertisement.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateAdvertisement(req: Request, res: Response) {
    try {
      const { body } = req;
      const advertisement = await prisma.advertisement.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteAdvertisement(req: Request, res: Response) {
    try {
      const advertisement = await prisma.advertisement.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default advertisementController;
