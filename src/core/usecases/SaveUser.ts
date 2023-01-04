import User from "../Entities/User";
import UserRepository from "../repositories/UserRepository";

export default class SaveUser{
    private userRepository:UserRepository;

    constructor(userRepository:UserRepository){
        this.userRepository = userRepository;
    }
    run(user:User):void{
        for(let myUser of this.userRepository.myUsers){
            if(myUser.email == user.email || myUser.usuario == user.usuario){
                throw new Error("User name or email exists already");
            }
        }
        this.userRepository.save(user);
    }
}

