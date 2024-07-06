import {Router} from 'express'
import { acceptUser } from '../Controllers/login.controllers.js';

const router = Router();

router.post("/login", acceptUser)

export default router;

