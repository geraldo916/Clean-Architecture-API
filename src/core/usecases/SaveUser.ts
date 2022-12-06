import User from "../Entities/User";
import UserRepository from "../repositories/UserRepository";

type userProps = {
    _id:string;
    name:string;
    email:string;
    password:string;
    usuario:string;
}

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }

    run(user:User){
        this.userRepository.save(user);
    }

}