import User from "../../core/Entities/User";
import UserRepository from "../../core/repositories/UserRepository";
import {passwordEncryption} from "../../core/usecases/PasswordEncryption"

export default class UserRepositoryMemory implements UserRepository{

    constructor(private readonly passwordEncyption:passwordEncryption){}

    myUsers: User[] = [];

    getAllUsers(): Promise<User[]> {
        return Promise.resolve(this.myUsers);
    }
    getUserById(id: number):  Promise<User> {
        return Promise.resolve(this.myUsers.find(user => user._id === id));
    }

    async save(user: User):Promise<void> {
        user.password = await this.passwordEncyption.run(user.password)
        this.myUsers.push(user);
    }
    
    async update(user: User){
        const userFound = this.myUsers.find(u => u._id == user._id);
        userFound.name = user.name;
        userFound.email = user.email;
        userFound.password = await this.passwordEncyption.run(user.password);
        userFound.usuario = user.usuario;
        userFound.role = user.role;
    }

    delete(id: number): void {
        
    }
    
}