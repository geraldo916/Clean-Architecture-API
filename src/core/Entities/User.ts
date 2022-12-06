export default class User{
    public _id: number;
    name: string;
    password: string;
    email: string;
    usuario: string;
    constructor(id:number,name:string,password:string,email:string,usuario:string){
        this._id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.usuario = usuario;
    }

}