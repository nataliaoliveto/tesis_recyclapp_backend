import { Router } from "express";
import imagesController from "../controllers/images.controller";
import { upload } from "../utils/multer.config";

const router = Router();

router.get("/images", imagesController.getImages);
router.get("/image/:id", imagesController.getImage);
router.post("/image", upload.single("image_file"), imagesController.uploadImage);
router.delete("/image/:id", imagesController.deleteImage);

export default router;
