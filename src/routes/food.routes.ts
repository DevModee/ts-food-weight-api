import { Router } from "express";
import { addFood, getFood } from "../controllers/food.controller";

const router = Router();

router.post("/", addFood);
router.get("/", getFood)

export default router;
