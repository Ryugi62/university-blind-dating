import { Router } from "express";
import { registerUser, getUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", registerUser);
router.get("/:email", getUser);

export default router;
