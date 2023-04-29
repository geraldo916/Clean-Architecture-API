import User from "../Entity/User";
import UserRepository from "../repositories/UserRepository";

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }
    async run(user:User):Promise<void>{
        await this.userRepository.save(user);
    }
}

