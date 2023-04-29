import passwordEncryption from "../protocols/criptography/PasswordEncryption";
import UserRepository from "../repositories/UserRepository";

export default class ChangePassword{
    constructor(
        private readonly userRepository:UserRepository,
        private readonly passwordEncryption:passwordEncryption
    ){}

    async run(id:string,newPassword:string,oldPassword:any):Promise<void>{
        const user = await this.userRepository.getUserById(id);
        const isCorrect = await this.passwordEncryption.compare(oldPassword,user.password);
        if(!isCorrect) throw new Error("Incorret Password");
        const password = await this.passwordEncryption.run(newPassword);
        await this.userRepository.changePassword(id,password);
    }
}