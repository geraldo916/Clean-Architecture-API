import User from "../../core/Entities/User";
import UserRepository from "../repositories/UserRepository";

export default class GetUser{
    userRepository: UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }

    getUsers():Promise<User[]>{
        return Promise.resolve(this.userRepository.myUsers);
    }
    getUserById(id:number):Promise<User>{
        return Promise.resolve(this.userRepository.myUsers.find(user => user._id === id));
    }
    
}