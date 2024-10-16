import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function mainAdvertisement() {
  console.log("mainAdvertisement");
  // await prisma.advertisement.create({
  //   data: {
  //     userId: 30,
  //     subscriptionId: 1,
  //     durationStart: new Date("2022-12-18"),
  //     durationEnd: new Date("2022-12-19"),
  //     displayName: "Ad Daily",
  //     text: "Advertisement Daily Subscription Test",
  //   },
  // });
  // await prisma.advertisement.createMany({
  //   data: [
  //     {
  //       userId: 30,
  //       subscriptionId: 2,
  //       durationStart: new Date("2022-12-18"),
  //       durationEnd: new Date("2022-12-25"),
  //       displayName: "Ad Weekly",
  //       text: "Advertisement Weekly Subscription Test",
  //     },
  //     {
  //       userId: 30,
  //       subscriptionId: 3,
  //       durationStart: new Date("2022-12-19"),
  //       durationEnd: new Date("2023-01-19"),
  //       displayName: "Ad Monthly",
  //       text: "Advertisement Monthly Subscription Test",
  //     },
  //   ],
  //   skipDuplicates: true,
  // });
  // await prisma.advertisement.update({
  //   where: {
  //     id: 2,
  //   },
  //   data: {
  //     subscription: {
  //       connect: {
  //         id: 3,
  //       },
  //     },
  //   },
  // });
  // await prisma.advertisement.delete({
  //   where: {
  //     id: "clf7a1f1e0000up9g2u248y4y",
  //   },
  // });
}
