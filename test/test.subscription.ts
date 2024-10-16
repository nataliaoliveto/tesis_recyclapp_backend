import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function mainSubscription() {
  console.log("mainSubscription");
  await prisma.subscription.createMany({
    data: [
  {
    name: "ADdiaria",
    amount: 375,
    duration: 1,
  },
  {
    name: "ADsemanal",
    amount: 2115,
    duration: 7,
  },
  {
    name: "ADmensual",
    amount: 7615,
    duration: 28,
  },
  {
    name: "USBONmensual",
    amount: 1500,
    duration: 28,
  },
  {
    name: "USBOFFmensual",
    amount: 2500,
    duration: 28,
  },
      {
        name: "DO100",
        amount: 100,
        duration: 7,
      },
      {
        name: "DO500",
        amount: 500,
        duration: 7,
      },
      {
        name: "DO1000",
        amount: 1000,
        duration: 7,
      },
    ],
    skipDuplicates: true,
  });
  // // await prisma.subscription.delete({
  //   where: {
  //     id: 3,
  //   },
  // });
}
