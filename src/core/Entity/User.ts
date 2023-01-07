export default class User{
    public _id: number;
    name: string;
    password: string;
    email: string;
    usuario: string;
    role: number;
    constructor(id:number,name:string,password:string,email:string,usuario:string, role:number){
        this._id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.usuario = usuario;
        this.role = role;
    }

}