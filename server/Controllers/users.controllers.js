import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const createUser = async (req , res) =>{
    try{
        const {firstname,lastname, email, licence, tel, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUserform = await prisma.Form.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                licence: licence,
                tel: tel,
                password: hashedPassword,
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    licence: true,
                    tel: true,
                    }
            });
            res.status(200).json(newUserform)

    
    
        // res.send("register user")
     }
     catch(err){
        res.status(500).json(err.message)
        }
    }
