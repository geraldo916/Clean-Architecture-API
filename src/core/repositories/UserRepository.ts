import User from "../Entity/User";

export default interface UserRepository{
    myUsers: User[];
    save(user:User):void;
    delete(id:number):void;
    update(user:User):void;
    getAllUsers(): Promise<User[]>;
    getUserById(id:number): Promise<User>;
    getUserByEmail(email:string): Promise<User>;
}