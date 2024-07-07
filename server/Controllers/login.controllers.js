import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
import jwt from 'jsonwebtoken'

export const acceptUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await prisma.signUp.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ error: "wrong email " });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        const payload = {
            id: user.id,
            email: user.email

        }
    //   return res.status(401).json({ error: "wrong password" });
    const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"10m"})
    res.cookie("access_token", token, {httpOnly: true})
    return res.status(200).json({success: true, data: user})

    }

    
    res.status(200).json({ message: "Login successful", user: user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json(error.message);
  } finally {
    await prisma.$disconnect();
  }
};
