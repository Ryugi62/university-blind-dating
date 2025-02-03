import { Router } from "express";
import {
  createChatRoom,
  getChatRooms,
} from "../controllers/chatRoomController.js";

const router = Router();

router.post("/", createChatRoom);
router.get("/", getChatRooms);

export default router;
