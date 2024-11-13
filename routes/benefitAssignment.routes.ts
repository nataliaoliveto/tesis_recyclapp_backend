import { Router } from "express";
import benefitAssignmentController from "../controllers/benefitAssignment.controller";

const router = Router();

router.get(
  "/benefit-assignments",
  benefitAssignmentController.getBenefitAssignments
);
router.get(
  "/benefit-assignment:id",
  benefitAssignmentController.getBenefitAssignment
);
router.post(
  "/benefit-assignment",
  benefitAssignmentController.createBenefitAssignment
);
router.put(
  "/benefit-assignment/:id",
  benefitAssignmentController.updateBenefitAssignment
);
router.delete(
  "/benefit-assignment/:id",
  benefitAssignmentController.deleteBenefitAssignment
);

export default router;
