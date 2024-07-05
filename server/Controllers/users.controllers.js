import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const createUser = async (req , res) =>{
    try{
        const {firstname,lastname, email, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    }
            });
            res.status(200).json(newUser)

    
    
        // res.send("register user")
     }
     catch(err){
        res.status(500).json(err.message)
        }
    }
