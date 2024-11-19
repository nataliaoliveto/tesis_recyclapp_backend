import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const addressController = {
  async getAddresses(req: Request, res: Response) {
    try {
      const addresses = await prisma.address.findMany({
        where: {
          isArchived: false,
        },
      });
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getAddressClerk(req: Request, res: Response) {
    const { id } = req.params;
    console.log("backend");
    try {
      const address = await prisma.address.findMany({
        where: {
          userId: id,
          isArchived: false,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getAddress(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const address = await prisma.address.findUnique({
        where: {
          id,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createAddress(req: Request, res: Response) {
    const { body } = req;
    try {
      const address = await prisma.address.create({
        data: {
          ...body,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      console.log("error", error);
      res.status(500).json(error);
    }
  },
  async updateAddress(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    console.log("req", body, id);
    try {
      const address = await prisma.address.update({
        where: {
          id,
        },
        data: {
          ...body,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      console.log("error", error);
      res.status(500).json(error);
    }
  },
  async deleteAddress(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const address = await prisma.address.delete({
        where: {
          id,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      console.log("error", error);
      res.status(500).json(error);
    }
  },
};

export default addressController;
