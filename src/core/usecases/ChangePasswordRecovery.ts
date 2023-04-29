import passwordEncryption from "../protocols/criptography/PasswordEncryption";
import TokenGenerator from "../protocols/criptography/TokenGenerator";
import UserRepository from "../repositories/UserRepository";

export default class ChangePasswordRecovery{
    constructor(
        private readonly userRepository:UserRepository,
        private readonly tokenGenerator:TokenGenerator,
        private readonly passwordEncrypt:passwordEncryption
        ){}

    async run({token,newPassword}:{token:string,newPassword:string}){
        const tokenData = await this.tokenGenerator.decrypt(token);
        
        const dateNow = new Date();
        const tokenIsExpiredByOneDay = this.dayDiff(dateNow.getTime(),tokenData.date)
        if(tokenIsExpiredByOneDay) throw new Error("Token expired");
        const user = await this.userRepository.getUserByEmail(tokenData.email);
        const passowrd = await this.passwordEncrypt.run(newPassword)
        await this.userRepository.changePassword(user._id,passowrd);
    }
    dayDiff(date1:number,date2:number){
        const onehour = 60*60*1000 //number of all milliseconds in a day
        const diffInTime = date2 - date1
        const diffHour = Math.ceil(diffInTime/onehour)
    
        return diffHour;
    }
}