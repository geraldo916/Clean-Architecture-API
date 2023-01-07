import User from "../Entity/User";
import UserRepository from "../repositories/UserRepository";

export default class GetUser{
    userRepository: UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }

    async getUsers():Promise<User[]>{
        return await this.userRepository.getAllUsers();
    }
    async getUserById(id:number):Promise<User>{
        return await this.userRepository.getUserById(id);
    }
    
}