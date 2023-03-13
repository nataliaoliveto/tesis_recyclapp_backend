import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function mainImage() {
  console.log("mainImage");

  await prisma.image.delete({
    where: {
        id: "clf7ac8sw0002upww2tzq0uhu",
    }
  })
}