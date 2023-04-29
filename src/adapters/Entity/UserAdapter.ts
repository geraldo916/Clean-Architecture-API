import User from "../../core/Entity/User";

export default class UserAdapter{
    static create({id,name,password,email,user,role}){
        return new User(id,name,password,email,user,role);
    }
}