import { Router } from "express";
import imageController from "../controllers/image.controller";

const router = Router();

router.post("/image/upload", imageController.uploadImageHandler);
router.post("/image/delete", imageController.deleteImageHandler);

export default router;
