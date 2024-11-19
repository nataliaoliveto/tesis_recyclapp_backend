import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import { handlePrismaError } from "../utils/handlePrismaError";

const prisma = new PrismaClient();

const userStoreController = {
  async getUserStores(req: Request, res: Response) {
    try {
      const userStores = await prisma.userStore.findMany();
      res.status(200).json(userStores);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUserStore(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userStore = await prisma.userStore.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(userStore);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUserStoreClerk(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userStore = await prisma.userStore.findUnique({
        where: {
          userId: id,
        },
      });
      res.status(200).json(userStore);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async createUserStore(req: Request, res: Response) {
    const { body } = req;

    try {
      const userStore = await prisma.userStore.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(userStore);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        let error = handlePrismaError(e);

        return res
          .status(error.status)
          .json({ status: "error", message: error.message });
      }

      return res.status(500).json({
        status: e.status,
        message:
          "Ocurrió un error. Por favor, vuelve a intentarlo o contacta a soporte.",
      });
    }
  },
  async updateUserStore(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;

    try {
      const userStore = await prisma.userStore.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(userStore);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  async deleteUserStore(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userStore = await prisma.userStore.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(userStore);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default userStoreController;
