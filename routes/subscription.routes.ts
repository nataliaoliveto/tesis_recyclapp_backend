import { Router } from "express";
import subscriptionController from "../controllers/subscription.controller";

const router = Router();

router.get("/subscriptions", subscriptionController.getSubscriptions);
router.get("/subscription/:id", subscriptionController.getSubscription);
router.post("/subscription", subscriptionController.createSubscription);
router.put("/subscription/:id", subscriptionController.updateSubscription);
router.delete("/subscription/:id", subscriptionController.deleteSubscription);

export default router;
