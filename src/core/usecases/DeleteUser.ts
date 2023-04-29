import UserRepository from "../repositories/UserRepository";

export default class DeleteUser{

    constructor(private readonly userRepository:UserRepository){}

    async run(id:number):Promise<void>{
        await this.userRepository.delete(id);   
    }
}