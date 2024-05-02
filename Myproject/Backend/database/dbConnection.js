import mongoose from "mongoose";

export const dbConnection =()=> {
    mongoose.connect(process.env.MONGO_URL, {
      dbName : "MERN_STACK_JOB_SEEKING",
    })  
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

}