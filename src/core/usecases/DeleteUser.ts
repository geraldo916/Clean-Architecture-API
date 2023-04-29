import UserRepository from "../repositories/UserRepository";

export default class DeleteUser{

    constructor(private readonly userRepository:UserRepository){}

    async run(id:string):Promise<void>{
        await this.userRepository.delete(id);   
    }
}