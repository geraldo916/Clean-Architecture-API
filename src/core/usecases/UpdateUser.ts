import { UserInfo } from "../Entity/User";
import UserRepository from "../repositories/UserRepository";

export default class UpdateUser {
    constructor(private readonly userRepository:UserRepository){}

    async update(id:any,user:UserInfo):Promise<void>{
        await this.userRepository.update(id,user);
    }
}