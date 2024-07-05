import { Router} from 'express'
import { createUser } from '../Controllers/users.controllers.js';

 const router = Router();

 router.post("/apply", createUser)
   
    
   
 export default router;