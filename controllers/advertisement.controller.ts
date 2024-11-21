import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const advertisementController = {
  async getAdvertisements(req: Request, res: Response) {
    try {
      const advertisements = await prisma.advertisement.findMany({
        where: {
          isArchived: false,
        },
      });
      res.status(200).json(advertisements);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getAdvertisement(req: Request, res: Response) {
    try {
      const advertisement = await prisma.advertisement.findUnique({
        where: {
          id: req.params.id,
          isArchived: false,
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
      const advertisementBody: Prisma.AdvertisementCreateInput = {
        subscription: {
          connect: {
            name: "AD" + body.duration,
          },
        },
        text: body.text,
        title: body.title,
        userId: body.userId,
      };
      const advertisement = await prisma.advertisement.create({
        data: {
          ...advertisementBody,
        },
      });

      console.log("advertisement", advertisement);

      res.status(201).json({ advertisementId: advertisement.id });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateAdvertisement(req: Request, res: Response) {
    //TODO: check if it is required to be available
    try {
      const { body } = req;
      const advertisementBody: Prisma.AdvertisementUpdateArgs = {
        where: {
          id: req.params.id,
        },
        data: {
          subscription: {
            connect: {
              name: "AD" + body.duration,
            },
          },
          text: body.text,
          title: body.title,
          userId: body.userId,
        },
      };
      const advertisement = await prisma.advertisement.update(
        advertisementBody
      );
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async upsertAdvertisement(req: Request, res: Response) {
    //TODO: check if it is required to be available
    try {
      const { body } = req;
      const advertisementBody: Prisma.AdvertisementUpsertArgs = {
        where: {
          id: req.params.id,
        },
        update: {
          subscription: {
            connect: {
              name: "AD" + body.duration,
            },
          },
          text: body.text,
          title: body.title,
          userId: body.userId,
        },
        create: {
          subscription: {
            connect: {
              name: "AD" + body.duration,
            },
          },
          text: body.text,
          title: body.title,
          userId: body.userId,
        },
      };
      const advertisement = await prisma.advertisement.upsert(
        advertisementBody
      );
      res.status(201).json(advertisement.id);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteAdvertisement(req: Request, res: Response) {
    try {
      const advertisement = await prisma.advertisement.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(advertisement);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default advertisementController;
