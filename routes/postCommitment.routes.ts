import { Router } from "express";
import postCommitmentController from "../controllers/postCommitment.controller";

const router = Router();

router.get("/postCommitments", postCommitmentController.getPostCommitments);
router.get("/postCommitment/:id", postCommitmentController.getPostCommitment);
router.post("/postCommitment", postCommitmentController.createPostCommitment);
router.put(
  "/postCommitment/:id",
  postCommitmentController.updatePostCommitment
);
router.delete(
  "/postCommitment/:id",
  postCommitmentController.deletePostCommitment
);

export default router;
