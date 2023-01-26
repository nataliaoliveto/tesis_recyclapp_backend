import { Router } from "express";
import chatMessageController from "../controllers/chatMessage.controller";

const router = Router();

router.get("/chatMessages", chatMessageController.getChatMessages);
router.get("/chatMessage/:id", chatMessageController.getChatMessage);
router.post("/chatMessage", chatMessageController.createChatMessage);
router.put("/chatMessage/:id", chatMessageController.updateChatMessage);
router.delete("/chatMessage/:id", chatMessageController.deleteChatMessage);

export default router;
