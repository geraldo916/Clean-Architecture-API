export default class User{
    public _id: string;
    name: string;
    password: string;
    email: string;
    usuario: string;
    constructor(id:string,name:string,password:string,email:string,usuario:string){
        this._id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.usuario = usuario;
    }
}