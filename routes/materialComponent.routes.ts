import { Router } from "express";
import materialComponentController from "../controllers/materialComponent.controller";

const router = Router();

router.get(
  "/materialComponents",
  materialComponentController.getMaterialComponents
);
router.get(
  "/materialComponent/:id",
  materialComponentController.getMaterialComponent
);
router.post(
  "/materialComponent",
  materialComponentController.createMaterialComponent
);
router.put(
  "/materialComponent/:id",
  materialComponentController.updateMaterialComponent
);
router.delete(
  "/materialComponent/:id",
  materialComponentController.deleteMaterialComponent
);

export default router;
