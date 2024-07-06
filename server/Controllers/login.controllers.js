import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const acceptUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
          }
            
            const user = await prisma.signUp.findUnique({
              where: { email: email },
            });
        
            if (!user) {
              return res.status(401).json({ error: 'wrong email ' });
            }
        
            // Check if password is correct
            const isPasswordValid = await bcrypt.compare(password, user.password);
        
            if (!isPasswordValid) {
              return res.status(401).json({ error: 'wrong password' });
            }
        
            // Return success response
            res.status(200).json({ message: 'Login successful', user: user });
          } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json( error.message);
          } finally {
            await prisma.$disconnect();
          }

        }






