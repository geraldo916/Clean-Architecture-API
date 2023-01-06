import bcrypt from 'bcrypt'; 

export interface passwordEncryption{
    run(password:string):Promise<string>
    compare(password:string,hash:string):Promise<boolean>
}

export class HashPasswordWithBcrypt implements passwordEncryption {

    async run(password:string):Promise<string>{
        const hash = await bcrypt.hash(password,10);
        return hash;
    }

    async compare(password: string, hash: string): Promise<boolean> {
        const result = bcrypt.compare(password, hash);
        return result;
    }

}