import { Router } from "express";
import benefitAssignmentController from "../controllers/benefitAssignment.controller";

const router = Router();

router.get(
  "/benefitassignments",
  benefitAssignmentController.getBenefitAssignments
);
router.get(
  "/benefitassignment:id",
  benefitAssignmentController.getBenefitAssignment
);
router.get(
  "/benefitassignment/user/:id",
  benefitAssignmentController.getBenefitAssignmentsUserCustomer
);
router.post(
  "/benefitassignment/storeBenefits",
  benefitAssignmentController.getBenefitAssignmentsByStoreBenefits
);
router.post(
  "/benefitassignment",
  benefitAssignmentController.createBenefitAssignment
);
router.put(
  "/benefitassignment/:id",
  benefitAssignmentController.updateBenefitAssignment
);
router.delete(
  "/benefitassignment/:id",
  benefitAssignmentController.deleteBenefitAssignment
);

export default router;
