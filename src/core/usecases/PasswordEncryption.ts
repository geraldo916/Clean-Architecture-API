export interface passwordEncryption{
    run(password:string):Promise<string>
    compare(password:string,hash:string):Promise<boolean>
}