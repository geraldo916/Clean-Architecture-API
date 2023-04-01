import  passwordEncryption  from "../protocols/criptography/PasswordEncryption";
import UserRepository from "../repositories/UserRepository";
import TokenGenerator from "../protocols/criptography/TokenGenerator";

export default class Login{
    constructor(private readonly passwordEncript:passwordEncryption,
                private readonly userRepository:UserRepository,
                private readonly tokenGenerator:TokenGenerator){}

    async run({password,email}){
        const user = await this.userRepository.getUserByEmail(email)
        if(!user) throw new Error("User not found -Invalid Email");

        const passwordVerification = await this.passwordEncript.compare(password,user.password);
        if(!passwordVerification) throw new Error("Incorrect Password");

        return this.tokenGenerator.encrypt({id_user:user._id,usuario:user.user,email:user.email,name:user.name,role:user.role});
    }

}