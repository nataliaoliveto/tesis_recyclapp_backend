import { PrismaClient, Prisma, BenefitType } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function mainUserStore() {
  console.log("mainUserStore");

  // await prisma.userStore.delete({
  //   where: {
  //     id: 1,
  //   },
  // });

  await prisma.userStore.upsert({
    where: {
      userId: "cleuipzo60002v8fcwfmyp9xk",
    },
    update: {
      userId: "cleuipzo60002v8fcwfmyp9xk",
    },
    create: {
      userId: "cleuipzo60002v8fcwfmyp9xk",
      displayName: "Store Test",
      subscriptionId: "clekcsml00001v8xcwjh39nod",
      expiryDate: new Date("2024-12-31T23:59:59Z"),
    },
  });
}
