import type { Request, Response } from "express";
import { handleDelete, handleUpload } from "../utils/cloudinary.config";

const imageController = {
  async uploadImageHandler(req: Request, res: Response) {
    const { image, public_id, subfolder } = req.body;

    try {
      const result = await handleUpload(image, public_id, subfolder);
      res.status(200).json({ message: "Imagen subida con éxito", result });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al subir la imagen", details: error });
    }
  },

  async deleteImageHandler(req: Request, res: Response) {
    const { public_id } = req.body;

    try {
      const result = await handleDelete(public_id);
      res.status(200).json({ message: "Imagen eliminada con éxito", result });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al eliminar la imagen", details: error });
    }
  },
};

export default imageController;
