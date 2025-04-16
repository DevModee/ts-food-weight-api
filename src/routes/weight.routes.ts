import { Router } from "express";
import { addWeight, getWeight } from "../controllers/weight.controller";

const router = Router();

router.post("/", addWeight)
router.get("/", getWeight)

export default router;