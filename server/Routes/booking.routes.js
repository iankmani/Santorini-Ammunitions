import {Router} from 'express'
import { createbooking } from '../Controllers/booking.controllers.js'
import { getAllBookings } from '../Controllers/booking.controllers.js';
import { updateBookings } from '../Controllers/booking.controllers.js';
import { deleteBookings } from '../Controllers/booking.controllers.js';

const router = Router();

router.post("/booking", createbooking)
router.get("/booking", getAllBookings)
router.patch("/booking/:id", updateBookings)
router.delete("/booking/:id", deleteBookings)


export default router;