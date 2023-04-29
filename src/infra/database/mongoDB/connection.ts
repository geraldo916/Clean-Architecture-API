import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connection = () =>{
    mongoose.connect(process.env.MONGO_KEY).then(()=>{
        console.log("Mongo Database Conected");
    }).catch(err=>{
        throw err
    })
}

export default connection;