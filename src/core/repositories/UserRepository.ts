import User,{UserInfo} from "../Entity/User";


export default interface UserRepository{
    save(user:User):void;
    delete(id:any):void;
    update(id:any,user:UserInfo):void;
    getAllUsers(): Promise<User[]>;
    getUserById(id:any): Promise<User>;
    getUserByEmail(email:string): Promise<User>;
    changePassword(id:any,newPassword:string):void
}