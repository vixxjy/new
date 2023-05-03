import express from "express";
import { addUser, getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/user", addUser);

export default router;
