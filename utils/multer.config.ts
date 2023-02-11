import type { Request, Response } from "express";
import Multer from "multer";

const storage = Multer.memoryStorage();
export const upload = Multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function getImage(formData: Request) {}
