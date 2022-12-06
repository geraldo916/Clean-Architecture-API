import User from "../../core/Entities/User";
import UserRepository from "../../core/repositories/UserRepository";

export default class UserRepositoryMemory implements UserRepository{
    myUsers: User[] = [];

    save(user: User): void {
        this.myUsers.push(user);
    }
    
}