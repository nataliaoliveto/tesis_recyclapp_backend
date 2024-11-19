import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import { handlePrismaError } from "../utils/handlePrismaError";

const prisma = new PrismaClient();

const userCustomerController = {
  async getUserCustomers(req: Request, res: Response) {
    try {
      const userCustomers = await prisma.userCustomer.findMany();
      res.status(200).json(userCustomers);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUserCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userCustomer = await prisma.userCustomer.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(userCustomer);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async getUserCustomerClerk(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userCustomer = await prisma.userCustomer.findUnique({
        where: {
          userId: id,
        },
      });
      res.status(200).json(userCustomer);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async createUserCustomer(req: Request, res: Response) {
    const { body } = req;

    try {
      const userCustomer = await prisma.userCustomer.create({
        data: {
          pointsCurrent: 0,
          pointsTotal: 0,
          userId: body.userId,
        },
      });

      res.status(201).json(userCustomer);
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
  async updateUserCustomer(req: Request, res: Response) {
    const { body } = req;
    const { id } = req.params;

    try {
      const userCustomer = await prisma.userCustomer.update({
        where: {
          id: id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(userCustomer);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  async deleteUserCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userCustomer = await prisma.userCustomer.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(userCustomer);
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default userCustomerController;
