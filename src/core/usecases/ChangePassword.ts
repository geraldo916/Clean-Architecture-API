import passwordEncryption from "../protocols/criptography/PasswordEncryption";
import UserRepository from "../repositories/UserRepository";

export default class ChangePassword{
    constructor(
        private readonly userRepository:UserRepository,
        private readonly passwordEncryption:passwordEncryption
    ){}

    async run(id,newPassword,oldPassword){

    }
}