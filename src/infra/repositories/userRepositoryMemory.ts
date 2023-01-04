import User from "../../core/Entities/User";
import UserRepository from "../../core/repositories/UserRepository";

export default class UserRepositoryMemory implements UserRepository{
  
    myUsers: User[] = [];

    save(user: User): void {
        this.myUsers.push(user);
    }
    
    update(user: User): void {
        const userFound = this.myUsers.find(u => u._id == user._id);
        userFound.name = user.name;
        userFound.email = user.email;
        userFound.password = user.password;
    }

    
}