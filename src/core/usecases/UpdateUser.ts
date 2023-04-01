import { UserInfo } from "../Entity/User";
import UserRepository from "../repositories/UserRepository";

export default class UpdateUser {
    constructor(private readonly userRepository:UserRepository){}

    update(user:UserInfo):void{
        this.userRepository.update(user);
    }
}