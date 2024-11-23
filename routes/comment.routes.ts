import { Router } from "express";
import commentController from "../controllers/comment.controller";

const router = Router();

router.get("/comments", commentController.getComments);
router.get("/comment/:id", commentController.getComment);
router.get("/comments/post/:id", commentController.getCommentsByPostId);
router.post("/comment", commentController.createComment);
router.put("/comment/:id", commentController.updateComment);
router.delete("/comment/:id", commentController.deleteComment);

export default router;
