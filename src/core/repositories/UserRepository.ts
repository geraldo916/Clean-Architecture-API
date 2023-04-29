import User,{UserInfo} from "../Entity/User";


export default interface UserRepository{
    save(user:User):Promise<void>;
    delete(id:any):Promise<void>;
    update(id:any,user:UserInfo):Promise<void>;
    getAllUsers(): Promise<User[]>;
    getUserById(id:any): Promise<User>;
    getUserByEmail(email:string): Promise<User>;
    changePassword(id:any,newPassword:string):Promise<void>
}