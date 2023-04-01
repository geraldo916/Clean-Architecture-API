import TokenGenerator from "../protocols/criptography/TokenGenerator";
import UserRepository from "../repositories/UserRepository";

export default class ChangePassword{
    constructor(
        private readonly userRepository:UserRepository,
        private readonly tokenGenerator:TokenGenerator
        ){}

    async run({token,newPassword}:{token:string,newPassword:string}){
        const tokenData = await this.tokenGenerator.decrypt(token);
        
        const dateNow = new Date();
        const tokenIsExpiredByOneDay = this.dayDiff(dateNow.getTime(),tokenData.date)
        if(tokenIsExpiredByOneDay) throw new Error("Token expired");
        await this.userRepository.changePassword(newPassword,tokenData.email);
    }
    dayDiff(date1:number,date2:number){
        const onehour = 60*60*1000 //number of all milliseconds in a day
        const diffInTime = date2 - date1
        const diffHour = Math.ceil(diffInTime/onehour)
    
        return diffHour;
    }
}