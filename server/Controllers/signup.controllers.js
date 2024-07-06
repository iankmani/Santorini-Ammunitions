import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const createnewform = async (req, res) =>{
    try{
        const {} = req.body;
    }catch(e){
        res.status(500).json({message: e.message});
    }
}