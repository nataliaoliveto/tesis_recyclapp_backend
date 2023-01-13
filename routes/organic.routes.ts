import { Router } from "express";
import organicController from "../controllers/organic.controller";

const router = Router();

router.get("/organics", organicController.getOrganics);
router.get("/organic/:id", organicController.getOrganic);
router.post("/organic", organicController.createOrganic);
router.put("/organic/:id", organicController.updateOrganic);
router.delete("/organic/:id", organicController.deleteOrganic);

export default router;
