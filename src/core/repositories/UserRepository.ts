import User from "../Entities/User";

export default interface UserRepository{
    save(user:User):void
}