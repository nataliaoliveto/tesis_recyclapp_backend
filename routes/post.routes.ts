import { Router } from "express";
import postController from "../controllers/post.controller";

const router = Router();

router.get("/posts", postController.getPosts);
router.get("/post/:id", postController.getPost);
router.get("/posts/user/:id", postController.getPostsByClerkId);
router.post("/post", postController.createPost);
router.put("/post/:id", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

export default router;
