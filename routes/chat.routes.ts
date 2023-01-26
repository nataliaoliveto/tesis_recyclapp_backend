import { Router } from "express";
import chatController from "../controllers/chat.controller";

const router = Router();

router.get("/chats", chatController.getChats);
router.get("/chat/:id", chatController.getChat);
router.post("/chat", chatController.createChat);
router.put("/chat/:id", chatController.updateChat);
router.delete("/chat/:id", chatController.deleteChat);

export default router;
