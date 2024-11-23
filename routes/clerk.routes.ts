import { Router } from "express";
import clerkController from "../controllers/clerk.controller";

const router = Router();

router.get("/clerkapi/:id", clerkController.getUserById);

export default router;
