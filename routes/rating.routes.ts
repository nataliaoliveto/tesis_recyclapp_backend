import { Router } from "express";
import ratingController from "../controllers/rating.controller";

const router = Router();

router.get("/ratings", ratingController.getRatings);
router.get("/rating/:id", ratingController.getRating);
router.post("/rating", ratingController.createRating);
router.put("/rating/:id", ratingController.updateRating);
router.delete("/rating/:id", ratingController.deleteRating);

export default router;
