import User from "../Entity/User";
import UserRepository from "../repositories/UserRepository";

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }
    async run(user:User):Promise<void>{
        for(let myUser of this.userRepository.myUsers){
            if(myUser.email == user.email || myUser.usuario == user.usuario){
                throw new Error("User name or email exists already");
            }
        }
        await this.userRepository.save(user);
    }
}

