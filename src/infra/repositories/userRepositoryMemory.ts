import User from "../../core/Entity/User";
import UserRepository from "../../core/repositories/UserRepository";
import passwordEncryption from "../../core/protocols/criptography/PasswordEncryption"
import { UserInfo } from "../../core/Entity/User";

export default class UserRepositoryMemory implements UserRepository{

    //constructor(private readonly passwordEncyption:passwordEncryption){}
    
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: any, user: UserInfo): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    getUserById(id: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    changePassword(id: any, newPassword: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    /*myUsers = [];

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
    
    async update(user:UserInfo){
        const userFound = this.myUsers.find(u => u.email == user.email);
        userFound.name = user.name;
        userFound.email = user.email;
        userFound.user = user.user;
        userFound.role = user.role;
    }

    delete(id: number): void {
        const newUsers = this.myUsers.filter(user => user._id !== id);
        this.myUsers = newUsers;
    }

    getUserByEmail(email: string): Promise<User> {
        return Promise.resolve(this.myUsers.find(user => user.email === email))
    }

    async changePassword(newPassword: string,email:string): Promise<void> {
        const userFound = this.myUsers.find(user => user.email === email);
        userFound.password = await this.passwordEncyption.run(newPassword);
    }*/
    
}