import User from "../Entities/User";
import UserRepository from "../repositories/UserRepository";

export default class UpdateUser {
    constructor(private readonly userRepository:UserRepository){}

    update(user:User):void{
        this.userRepository.update(user)
    }
}