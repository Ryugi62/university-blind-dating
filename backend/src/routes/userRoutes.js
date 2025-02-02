import { Router } from "express";
import { registerUser, getUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", registerUser);
router.get("/:email", getUser);

// getUser한 다음에 registerUser해야되면
// router.get("/test", async (req, res, next) => {
//     await getUser(req, res, next);
//     await registerUser(req, res, next);
// });

export default router;
