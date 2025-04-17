import { Router } from "express";
import { addWeight, deleteWeight, getWeight, updateWeight } from "../controllers/weight.controller";

const router = Router();

router.post("/", addWeight)
router.get("/", getWeight)
router.delete("/", deleteWeight)
router.put("/", updateWeight)

export default router;