import { Router } from "express";
import { registerUser, loginUser, getAllUsers, deleteUserById } from "../controllers/user.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.delete("/delete/:id", deleteUserById);

export default router;
