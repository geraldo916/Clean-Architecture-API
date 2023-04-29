import User, { UserInfo } from "../../core/Entity/User";
import UserRepository from "../../core/repositories/UserRepository";
import connection from "../database/mongoDB/connection";
import mongoose from "mongoose";
import Users from "../database/mongoDB/models/Users";
import UserAdapter from "../../adapters/Entity/UserAdapter";

connection();

export default class UserRepositoryMongoDB implements UserRepository{

    async save(user: User): Promise<void> {
        const newUser = new Users({...user});
        await newUser.save();
    }
    async delete(id: number): Promise<void> {
        const result = await Users.findByIdAndDelete(id)
    }
    async update(id:any,user: UserInfo):Promise<void> {
        const userUpdated = await Users.findByIdAndUpdate(id,{...user});
    }
    async getAllUsers(): Promise<User[]> {
        const users:User[] = [];

        const allUsers = await Users.find({});
        for(const user of allUsers){
            users.push(UserAdapter.create({
                id:user._id,
                name:user.name,
                password:user.password,
                email:user.email,
                user:user.user,
                role:user.role}));
        }
        return users;
    }
    async getUserById(id: any): Promise<User> {
        const user = await Users.findById(id);
        return UserAdapter.create({
            id:user._id,
            name:user.name,
            password:user.password,
            email:user.email,
            user:user.user,
            role:user.role})
    }
    async getUserByEmail(email: string): Promise<User> {
        const user = await Users.findOne({email:email});
        return UserAdapter.create({
            id:user._id,
            name:user.name,
            password:user.password,
            email:user.email,
            user:user.user,
            role:user.role})
    }
    async changePassword(id:any,newPassword: string): Promise<void> {
        const userUpdated = await Users.findByIdAndUpdate(id,{password:newPassword});
    }
    
}