import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();


const router = Router();

router.post("api/users/signup", (req, res) =>   {
    res.send("signup");
})
export default router;