import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://meetshah5458498:WqRi4CQZEdyHvSY0@cluster0.ownws.mongodb.net/MERN-FOOD-DELIVERY-APP').then(()=>{
       console.log('DB connected') ;
    })
}