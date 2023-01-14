import { Router } from "express";
import materialProductController from "../controllers/materialProduct.controller";

const router = Router();

router.get("/materialProducts", materialProductController.getMaterialProducts);
router.get(
  "/materialProduct/:id",
  materialProductController.getMaterialProduct
);
router.post(
  "/materialProduct",
  materialProductController.createMaterialProduct
);
router.put(
  "/materialProduct/:id",
  materialProductController.updateMaterialProduct
);
router.delete(
  "/materialProduct/:id",
  materialProductController.deleteMaterialProduct
);

export default router;
