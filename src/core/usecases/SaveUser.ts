import User from "../Entities/User";
import UserRepository from "../repositories/UserRepository";

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }
    run(user:User){
        this.userRepository.save(user);
    }
}