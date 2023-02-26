import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

const donationController = {
  async getDonations(req: Request, res: Response) {
    try {
      const donations = await prisma.donation.findMany();
      res.status(200).json(donations);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getDonation(req: Request, res: Response) {
    try {
      const donation = await prisma.donation.findUnique({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(donation);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createDonation(req: Request, res: Response) {
    try {
      const { body } = req;
      //   const donationBody: Prisma.DonationCreateInput = {
      //     subscription: {
      //       connect: {
      //         name: "AD" + body.duration,
      //       },
      //     },
      //     text: body.text,
      //     title: body.title,
      //     user: {
      //       connect: {
      //         id: body.userId,
      //       },
      //     },
      //   };
      //   const donation = await prisma.donation.create({
      //     data: {
      //       ...donationBody,
      //     },
      //   });
      //   res.status(201).json(donation.id);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateDonation(req: Request, res: Response) {
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
          user: {
            connect: {
              id: body.userId,
            },
          },
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
  async upsertDonation(req: Request, res: Response) {
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
          user: {
            connect: {
              id: body.userId,
            },
          },
        },
        create: {
          subscription: {
            connect: {
              name: "AD" + body.duration,
            },
          },
          text: body.text,
          title: body.title,
          user: {
            connect: {
              id: body.userId,
            },
          },
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
  async deleteDonation(req: Request, res: Response) {
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

export default donationController;
