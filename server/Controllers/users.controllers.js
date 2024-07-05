import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const createUser = async (req , res) =>{
    try{
        const {firstname,lastname, email, licence, role, enquiry, message, tel, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserform = await prisma.Form.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                licence: licence,
                tel: tel,
                enquiry: enquiry,
                message: message,
                role: role,
                password: hashedPassword,
                },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    email: true,
                    licence: true,
                    tel: true,
                    enquiry: true,
                    message: true,
                    role: true,
                    }
            });
            res.status(200).json(newUserform)

    
    
        // res.send("register user")
     }
     catch(err){
        res.status(500).json(err.message)
        }
    }
