import { Router } from "express";
import greenPointController from "../controllers/greenPoint.controller";

const router = Router();

router.get("/greenPoints", greenPointController.getGreenPoints);
router.get("/greenPoint/:id", greenPointController.getGreenPoint);
router.post("/greenPoint", greenPointController.createGreenPoint);
router.put("/greenPoint/:id", greenPointController.updateGreenPoint);
router.delete("/greenPoint/:id", greenPointController.deleteGreenPoint);

export default router;
