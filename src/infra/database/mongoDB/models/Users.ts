import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    user:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:Number,
        require:true,
        unique:true
    }
},{timestamps:true})

export default mongoose.model("Users", UserSchema);