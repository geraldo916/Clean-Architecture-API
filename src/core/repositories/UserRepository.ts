import User from "../Entities/User";

export default interface UserRepository{
    myUsers: User[];
    save(user:User):void
    /*delete(id:number):void
    update(use:User):void*/
}