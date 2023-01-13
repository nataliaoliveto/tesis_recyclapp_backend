import { Router } from "express";
import advertisementController from "../controllers/advertisement.controller";

const router = Router();

router.get("/advertisements", advertisementController.getAdvertisements);
router.get("/advertisement/:id", advertisementController.getAdvertisement);
router.post("/advertisement", advertisementController.createAdvertisement);
router.put("/advertisement/:id", advertisementController.updateAdvertisement);
router.delete(
  "/advertisement/:id",
  advertisementController.deleteAdvertisement
);

export default router;
