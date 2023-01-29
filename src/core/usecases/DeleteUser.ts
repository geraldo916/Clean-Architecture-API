import UserRepository from "../repositories/UserRepository";

export default class DeleteUser{

    constructor(private readonly userRepository:UserRepository){}

    run(id:number):void{
        this.userRepository.delete(id);   
    }
}