import { Router } from "express";
import { createnewform, getallsignedupusers } from "../Controllers/signup.controllers.js";



const router = Router();

router.post("/signup", createnewform )
router.get('/signup', getallsignedupusers)
    

export default router;