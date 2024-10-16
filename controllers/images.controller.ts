import { PrismaClient, Prisma } from "@prisma/client";
import type { Request, Response } from "express";
import { handleUpload } from "../utils/cloudinary.config";

const prisma = new PrismaClient();

const imagesController = {
  async getImages(req: Request, res: Response) {
    try {
      const images = await prisma.image.findMany();
      res.status(200).json(images);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getImage(req: Request, res: Response) {
    const { id } = req.params;
    console.log("publicId", id);
    try {
      const address = await prisma.image.findUnique({
        where: {
          id,
        },
      });
      res.status(200).json(address);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async upsertImage(req: Request, res: Response) {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const fkType = req.body.subfolder;
    const fkValue = req.body.publicid;
    const fkTypeInput = fkType.toLowerCase() + "Id";
    console.log("value", fkValue);
    console.log("id", fkTypeInput);
    const cldRes = await handleUpload(dataURI, fkValue, fkType);

    const body: Prisma.ImageUpsertArgs = {
      where: {
        publicId: cldRes.public_id,
      },
      update: {
        publicId: cldRes.public_id,
        version: cldRes.version + "",
        format: cldRes.format,
        url: cldRes.secure_url,
        advertisementId:
          fkTypeInput === "advertisementId" ? fkValue : undefined,
        materialComponentId:
          fkTypeInput === "materialComponentId" ? fkValue : undefined,
        materialProductId:
          fkTypeInput === "materialProductId" ? fkValue : undefined,
        organicId: fkTypeInput === "organicId" ? fkValue : undefined,
        postId: fkTypeInput === "postId" ? fkValue : undefined,
        userId: fkTypeInput === "userId" ? fkValue : undefined,
      },
      create: {
        publicId: cldRes.public_id,
        version: cldRes.version + "",
        format: cldRes.format,
        url: cldRes.secure_url,
        advertisementId:
          fkTypeInput === "advertisementId" ? fkValue : undefined,
        materialComponentId:
          fkTypeInput === "materialComponentId" ? fkValue : undefined,
        materialProductId:
          fkTypeInput === "materialProductId" ? fkValue : undefined,
        organicId: fkTypeInput === "organicId" ? fkValue : undefined,
        postId: fkTypeInput === "postId" ? fkValue : undefined,
        userId: fkTypeInput === "userId" ? fkValue : undefined,
      },
    };

    try {
      const image = await prisma.image.upsert(body);

      res.status(200).json(image);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteImage(req: Request, res?: Response) {
    const { publicId } = req.params;
    try {
      const image = await prisma.image.delete({
        where: {
          publicId: publicId,
        },
      });
      res.status(200).json(image);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default imagesController;
