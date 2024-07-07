import { Router } from "express";
import { acceptUser } from "../Controllers/login.controllers.js";
import { validateLoginInformation } from "../Middlewares/login.middlewares.js";

const router = Router();

router.post("/login", acceptUser, validateLoginInformation);

export default router;
