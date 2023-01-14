import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const organicController = {
  async getOrganics(req: Request, res: Response) {
    try {
      const organics = await prisma.organic.findMany();
      res.status(200).json(organics);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getOrganic(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const organic = await prisma.organic.findUnique({
        where: { id: Number(id) },
      });
      res.status(200).json(organic);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createOrganic(req: Request, res: Response) {
    try {
      const { body } = req;
      const organic = await prisma.organic.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(organic);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateOrganic(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const organic = await prisma.organic.update({
        where: { id: Number(id) },
        data: {
          ...body,
        },
      });

      res.status(200).json(organic);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createOrUpdateOrganic(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const organic = await prisma.organic.upsert({
        where: { name: body.name.trim() },
        update: {
          ...body,
        },
        create: {
          ...body,
        },
      });

      res.status(organic.id ? 203 : 201).json(organic);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteOrganic(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const organic = await prisma.organic.delete({
        where: { id: Number(id) },
      });

      res.status(200).json(organic);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default organicController;
