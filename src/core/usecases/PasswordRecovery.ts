import TokenGenerator from "../protocols/criptography/TokenGenerator";
import UserRepository from "../repositories/UserRepository";

export default class PasswordRecovery{
    constructor(
        private readonly tokenGenerator:TokenGenerator,
        private readonly userRepository:UserRepository
        ){}

    async execute(email:string):Promise<string>{
        const user = await this.userRepository.getUserByEmail(email);  
        if(user!=undefined){
            const token = await this.tokenGenerator.encrypt({
                    date:new Date().getTime(),
                    id_user:user._id,
                    email:email,
                    status:true
                })
            return token
        }else{
            throw new Error("Email Invalid or Email is not registed");
        }
    }
}