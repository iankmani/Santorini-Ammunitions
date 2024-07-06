import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const createnewform = async (req, res) =>{
    try{
        const {firstname, lastname, email, password, phoneNumber} = req.body;

        const existingUser = await prisma.signUp.findUnique({
            where: { email },
          });
      
          if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
          }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newform = await prisma.signUp.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashedPassword,
                phoneNumber: phoneNumber
                }
                });
                res.status(201).json(newform);    
    }catch(e){
        res.status(500).json({message: e.message});
    }
    finally{
        await prisma.$disconnect();
        }

}
export const getallsignedupusers = async (req, res) => {
    try {
      const users = await prisma.signUp.findMany(); // Fetch all users
      res.json(users); // Send JSON response with users array
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };