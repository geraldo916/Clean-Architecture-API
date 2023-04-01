import User,{UserInfo} from "../Entity/User";


export default interface UserRepository{
    save(user:User):void;
    delete(id:number):void;
    update(user:UserInfo):void;
    getAllUsers(): Promise<User[]>;
    getUserById(id:number): Promise<User>;
    getUserByEmail(email:string): Promise<User>;
    changePassword(newPassword:string,email:string):void
}