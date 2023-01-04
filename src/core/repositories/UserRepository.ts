import User from "../Entities/User";

export default interface UserRepository{
    myUsers: User[];
    save(user:User):void;
    delete(id:number):void;
    update(user:User):void;
    getAllUsers(): Promise<User[]>;
    getUserById(id:number): Promise<User>;
}