import { PrismaClient, Prisma, BenefitType } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function mainBenefit() {
  console.log("mainBenefit");

  await prisma.benefit.upsert({
    where: {
      id: "4",
    },
    update: {
      name: "beneficioTESTupdate",
    },
    create: {
      name: "beneficioTEST",
      type: BenefitType.DISCOUNT,
      endDate: new Date().toISOString(),
      quantity: 2,
      pointsCost: 400,
      userStoreId: "cm2c0xumf0000v8mgt430n5dz",
      // userCustomerActive: {

      //   // connectOrCreate: [
      //   //   {
      //   //     where: {
      //   //       id: 6,
      //   //     },
      //   //     create: {
      //   //       userId: 3,
      //   //     },
      //   //   },
      //   // ],
      // },
      // userCustomerHistory: {
      //   //   set: [],
      //   // connectOrCreate: [
      //   //   {
      //   //     where: {
      //   //       id: "6",
      //   //     },
      //   //     create: {
      //   //       userId: "3",
      //   //     },
      //   //   },
      //   // ],
      // },
    },
  });

  await prisma.benefit.update({
    where: {
      id: "cm2c0yulo0000v8a4ra9e2h0b",
    },
    data: {
      isActive: false,
      isArchived: true,
    },
  });
}
