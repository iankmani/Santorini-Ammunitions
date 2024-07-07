import { Router } from "express";
import {
  createnewform,
  getallsignedupusers,
} from "../Controllers/signup.controllers.js";
import { validationSignupInformation } from "../Middlewares/signup.middlewares.js";

const router = Router();

router.post("/signup", createnewform, validationSignupInformation);
router.get("/signup", getallsignedupusers);

export default router;
