import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createbooking = async (req, res) =>{
    try{
        const {email, product, quantity, totalPrice, date, payment} = req.body;
        const createbooking = await prisma.booking.create({
            data: {
                email: email,
                product: product,
                quantity: quantity,
                totalPrice: totalPrice,
                date: date,
                payment: payment
            }
    
    
        })
        res.status(201).json({message:"booked successfully", createbooking})

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getAllBookings = async (req, res) => {
    try {
       
        const allbookings = await prisma.booking.findMany({
          
        }
        
    );
    res.status(201).json({message:"received all bookings successfully", allbookings})


}
catch(error){
    res.status(500).json({message: error.message})
}
}
export const updateBookings = async (req, res) =>{

    try{
        const { id } = req.params;
        const {email, product, quantity, totalPrice, date, payment} = req.body;
        const updatebooking = await prisma.booking.update({
            where: {id: id },
            data: {
                email: email,
                product: product,
                quantity: quantity,
                totalPrice: totalPrice,
                date: date,
                payment: payment

            }

        })
        res.status(200).json({ message: "Booking updated successfully", updatebooking });

        

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const deleteBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const deletebooking = await prisma.booking.delete({
            where: { id: id }


        })
        res.status(200).json({message:"deleted form successfully", deletebooking})

        
}catch(error){
    res.status(500).json({message: error.message})
}
}
 


