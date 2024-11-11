import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import { handlePrismaError } from "../utils/handlePrismaError";

const prisma = new PrismaClient();

const userController = {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany({
        include: {
          UserCustomer: true,
          UserStore: true,
        },
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          UserCustomer: true,
          UserStore: true,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async createUser(req: Request, res: Response) {
    const { body } = req;
    const { username } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          ...body,
        },
      });

      res.status(201).json(user);
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
  async updateUser(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;

    const { userData, userStoreData, userCustomerData } = body;

    try {
      const user = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          ...userData,
          UserStore: userStoreData
            ? {
                update: {
                  ...userStoreData,
                },
              }
            : undefined,
          UserCustomer: userCustomerData
            ? {
                update: {
                  ...userCustomerData,
                },
              }
            : undefined,
        },
        include: {
          UserStore: true,
          UserCustomer: true,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await prisma.user.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default userController;
