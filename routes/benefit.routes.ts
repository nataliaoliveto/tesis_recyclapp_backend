import { Router } from "express";
import benefitController from "../controllers/benefit.controller";

const router = Router();

router.get("/benefits", benefitController.getBenefits);
router.get("/benefit/:id", benefitController.getBenefit);
router.get("/benefits/:id", benefitController.getBenefitsByStore);
router.post("/benefit", benefitController.createBenefit);
router.put("/benefit/:id", benefitController.updateBenefit);
router.delete("/benefit/:id", benefitController.deleteBenefit);

export default router;
