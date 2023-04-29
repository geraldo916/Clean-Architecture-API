export default class User{
    public _id: string;
    name: string;
    password: string;
    email: string;
    user: string;
    role: number;
    constructor(id:string,name:string,password:string,email:string,user:string, role:number){
        this._id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.user = user;
        this.role = role;
    }

}

export type UserInfo={
    name:string,
    email:string,
    user:string,
    role:number,
}