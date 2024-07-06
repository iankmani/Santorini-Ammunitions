import { Router } from "express";
import { createForm } from "../Controllers/users.controllers.js";

const router = Router();

router.post("/apply", createForm);

export default router;
