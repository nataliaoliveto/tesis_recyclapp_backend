import { Router } from "express";
import benefitController from "../controllers/benefit.controller";

const router = Router();

router.get("/benefits", benefitController.getBenefits);
router.get("/benefit/:id", benefitController.getBenefit);
router.post("/benefit", benefitController.createBenefit);
router.put("/benefit/:id", benefitController.updateBenefit);
router.delete("/benefit/:id", benefitController.deleteBenefit);
router.put(
  "/benefit/:id/connect-active",
  benefitController.addBenefitUserActive
);
router.put(
  "/benefit/disconnect-active",
  benefitController.removeBenefitUserActive
);

export default router;
