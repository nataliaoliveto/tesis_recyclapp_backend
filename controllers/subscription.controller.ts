import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const subscriptionController = {
  async getSubscriptions(req: Request, res: Response) {
    try {
      const subscriptions = await prisma.subscription.findMany({
        where: {
          isArchived: false,
        },
      });
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSubscription(req: Request, res: Response) {
    try {
      const subscription = await prisma.subscription.findUnique({
        where: {
          id: req.params.id,
          isArchived: false,
        },
      });
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createSubscription(req: Request, res: Response) {
    const { body } = req;
    try {
      const subscription = await prisma.subscription.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateSubscription(req: Request, res: Response) {
    const { body } = req;
    try {
      const subscription = await prisma.subscription.update({
        where: {
          id: req.params.id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteSubscription(req: Request, res: Response) {
    try {
      const subscription = await prisma.subscription.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default subscriptionController;
