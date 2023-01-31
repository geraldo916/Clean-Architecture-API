export default interface TokenGenerator{
    encrypt(data:any):Promise<string>;
    decrypt(token:string):Promise<any>;
}